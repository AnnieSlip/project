import React from "react";
import { Route, Routes } from "react-router-dom";
import { filterItems } from "./helper";
import NavBar from "./Components/Navbar";
import ProductsContainer from "./Components/ProductsContainer";
import SingleProduct from "./Components/SingleProduct";
import { GlobalStyle } from "./Styles/Globalstyles";
import { DATA } from "./GraphQL/Queries";
import axios from "axios";
const URL = "http://localhost:4000/";

class App extends React.Component {
  state = {
    categories: [],
    currencies: [],
    products: [],
  };

  //Filter Products depending on navbar
  filterItems = (categoryy) => {
    this.setState((prevState) => ({
      products: categoryy.products,
      switch: true,
    }));
  };

  //Fetching data (save data in state)
  fetchData = async () => {
    try {
      const queryResult = await axios.post(URL, {
        query: DATA,
      });

      const result = queryResult.data.data;
      this.setState((prevState) => ({
        categories: result.categories,
        currencies: result.currencies,
        products: result.categories[0].products,
      }));
    } catch (error) {
      console.log(error.response);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <NavBar
          categories={this.state.categories}
          currencies={this.state.currencies}
          filterItems={this.filterItems}
        />
        <Routes>
          <Route
            path="/:category"
            element={
              <ProductsContainer
                products={this.state.products}
                switch={this.state.switch}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<SingleProduct products={this.state.products} />}
          />
        </Routes>
      </>
    );
  }
}

export default App;

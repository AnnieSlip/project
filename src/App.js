import React from "react";
import NavBar from "./Components/Navbar";
import ProductsContainer from "./Components/ProductsContainer";
import CategoryInput from "./Components/CategoryInput";
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
    category: "Tech",
    switch: true,
    id: "",
  };

  filterItems = (categoryy) => {
    this.setState((prevState) => ({
      products: categoryy.products,
      switch: true,
    }));
  };

  handleClick = (product) => {
    this.setState((prevState) => ({
      switch: false,
      id: product.id,
    }));
    console.log(product.id);
    console.log(this.state);
  };

  fetchData = async () => {
    try {
      const queryResult = await axios.post(URL, {
        query: DATA,
      });

      const result = queryResult.data.data;
      // console.log(result);

      this.setState((prevState) => ({
        categories: result.categories,
        currencies: result.currencies,
        products: result.categories[0].products,
      }));
    } catch (error) {
      console.log(error.response);
    }
    // console.log(this.state.categories);
    // console.log(this.state.currencies);
    // console.log(this.state.products);
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
          switch={this.switch}
        />
        {this.state.switch === true ? (
          <>
            <CategoryInput
              category={this.state.category}
              switch={this.state.switch}
            />

            <ProductsContainer
              products={this.state.products}
              switch={this.state.switch}
              handleClick={this.handleClick}
            />
          </>
        ) : (
          <SingleProduct products={this.state.products} id={this.state.id} />
        )}
      </>
    );
  }
}

export default App;

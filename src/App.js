import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/Cart/CartPage";
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
    currency: "USD",
    header: "$",
    selectedItems: 0,
    selectedProducts: [],
  };

  //Add selected item
  // addSelectedItem = () => {
  //   this.setState((prevState) => ({
  //     selectedItems: prevState.selectedItems + 1,
  //   }));
  //   this.setState((prevState) => ({
  //     selectedProducts: [this.product],
  //   }));

  //   console.log(this.selectedProducts);
  // };

  //Chamge Currency And Dropdown Header
  changeCurrency = (item) => {
    this.setState((prevState) => ({
      currency: item.label,
      header: item.symbol,
    }));
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
      // console.log(result);
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
          changeCurrency={this.changeCurrency}
          header={this.state.header}
          selectedItems={this.state.selectedItems}
        />
        <div>Annie</div>
        <Routes>
          <Route
            path="/:category"
            element={
              <ProductsContainer
                products={this.state.products}
                currency={this.state.currency}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct
                products={this.state.products}
                currency={this.state.currency}
                selectedItems={this.state.selectedItems}
                addSelectedItem={this.addSelectedItem}
              />
            }
          />

          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </>
    );
  }
}

export default App;

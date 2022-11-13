import React from "react";
import NavBar from "./NavBar";
import Single_Product_Cart from "./SingleProduct_Cart";
import CategoryName from "./CategoryName";
import { GlobalStyle } from "./Styles/Globalstyles";
import { DATA, NAVBAR_DATA } from "./GraphQL/Queries";
import axios from "axios";
const URL = "http://localhost:4000/";

class App extends React.Component {
  state = {
    categories: [],
    currencies: [],
    products: [],
    category: "Tech",
  };

  fetchData = async () => {
    try {
      const queryResult = await axios.post(URL, {
        query: DATA,
      });

      const result = queryResult.data.data;
      console.log(result);

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
    console.log(this.state.products);
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
        />
        <CategoryName category={this.state.category} />

        <Single_Product_Cart products={this.state.products} />
      </>
    );
  }
}

export default App;

import React from "react";
import NavBar from "./NavBar";
import { GlobalStyle } from "./Styles/Globalstyles";
import { DATA, NAVBAR_DATA } from "./GraphQL/Queries";
import axios from "axios";
const URL = "http://localhost:4000/";

class App extends React.Component {
  state = {
    categories: [],
    currencies: [],
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
      }));
    } catch (error) {
      console.log(error.response);
    }
    // console.log(this.state.categories);
    // console.log(this.state.currencies);
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
      </>
    );
  }
}

export default App;

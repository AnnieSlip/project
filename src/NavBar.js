import React from "react";
import { NAVBAR_DATA } from "./GraphQL/Queries";
import { graphql } from "@apollo/client/react/hoc";
import { Nav, NavButton, Dropdown } from "./NavBar.styles";

class NavBar extends React.Component {
  state = {
    value: "",
    clicked: false,
    dropdown_header: "$",
  };

  showDropdown = () => {
    console.log(this.state.clicked);
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  handleClick = (item) => {
    this.setState((prevState) => ({
      dropdown_header: item,
    }));
  };
  render() {
    console.log(this.props);
    let categories = this.props.data.categories;
    let currencies = this.props.data.currencies;

    if (categories && currencies) {
      return (
        <Nav>
          <div>
            {categories.map((category, index) => {
              return <NavButton key={index}>{category.name}</NavButton>;
            })}
          </div>

          <img src="../assets/arrow.png" alt="arrow" />
          <img src="../assets/Empty_Cart.png" alt="Empty Cart" />

          <Dropdown>
            <div onClick={this.showDropdown}>
              <p>{this.state.dropdown_header}</p>
              <img src="../assets/down-arrow.png" />
            </div>

            {this.state.clicked && (
              <ul>
                {currencies.map((currency, index) => {
                  const { label, symbol } = currency;

                  return (
                    <li key={index} onClick={() => this.handleClick(label)}>
                      {symbol} {label}
                    </li>
                  );
                })}
              </ul>
            )}
          </Dropdown>
        </Nav>
      );
    }

    return;
  }
}

export default graphql(NAVBAR_DATA)(NavBar);

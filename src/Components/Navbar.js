import React from "react";
import { Nav, NavButton, Wrapper, Dropdown } from "../Styles/Navbar.styles.js";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    value: "",
    clicked: false,
    dropdown_header: "$",
    numItems: 4,
  };

  showDropdown = () => {
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
    return (
      <Nav>
        <div>
          {this.props.categories.map((category, index) => {
            // console.log(category);
            return (
              <Link key={index} to={`/${category.name}`}>
                <NavButton onClick={() => this.props.filterItems(category)}>
                  {category.name}
                </NavButton>
              </Link>
            );
          })}
        </div>

        <img src="../assets/arrow.png" alt="arrow" />

        <Wrapper>
          <Dropdown>
            <div onClick={this.showDropdown}>
              <p>{this.state.dropdown_header}</p>
              <img src="../assets/down-arrow.png" alt="down-arrow" />
            </div>

            {this.state.clicked && (
              <ul>
                {this.props.currencies.map((currency, index) => {
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

          <div>
            <img src="../assets/Empty_Cart.png" alt="Empty Cart" />
            <span>
              <p>{this.state.numItems}</p>
            </span>
          </div>
        </Wrapper>
      </Nav>
    );
  }
}

export default NavBar;

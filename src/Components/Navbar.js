import React from "react";
import { Nav, NavButton, Wrapper, Dropdown } from "../Styles/Navbar.styles.js";
import CartOverlay from "./CartOverlay.js";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    value: "",
    clicked: false,
  };

  showDropdown = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    return (
      <Nav>
        {/* ROUTES */}
        <div>
          {this.props.categories.map((category, index) => {
            return (
              <Link key={index} to={`/${category.name}`}>
                <NavButton onClick={() => this.props.filterItems(category)}>
                  {category.name}
                </NavButton>
              </Link>
            );
          })}
        </div>
        {/* LOGO */}
        <img src="../assets/arrow.png" alt="arrow" />

        <Wrapper>
          {/* DROPDOWN MENU */}
          <Dropdown>
            <div onClick={this.showDropdown}>
              <p>{this.props.header}</p>
              <img src="../assets/down-arrow.png" alt="down-arrow" />
            </div>

            {this.state.clicked && (
              <ul>
                {this.props.currencies.map((currency, index) => {
                  const { label, symbol } = currency;

                  return (
                    <li
                      key={index}
                      onClick={() => this.props.changeCurrency(currency)}
                    >
                      {symbol} {label}
                    </li>
                  );
                })}
              </ul>
            )}
          </Dropdown>

          {/* CART ICON (TO TOGGLE CART) */}
          <div>
            <img src="../assets/Empty_Cart.png" alt="Empty Cart" />
            <span>
              <p>{this.props.selectedItems}</p>
            </span>
          </div>

          <CartOverlay />
        </Wrapper>
      </Nav>
    );
  }
}

export default NavBar;

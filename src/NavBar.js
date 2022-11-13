import React from "react";
import { Nav, NavButton, Dropdown, Wrapper } from "./Styles/NavBar.styles";

class NavBar extends React.Component {
  state = {
    value: "",
    clicked: false,
    dropdown_header: "$",
    numItems: 4,
  };

  showDropdown = () => {
    // console.log(this.state.clicked);
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
            return <NavButton key={index}>{category.name}</NavButton>;
          })}
        </div>

        <img src="../assets/arrow.png" alt="arrow" />

        <Wrapper>
          <Dropdown>
            <div onClick={this.showDropdown}>
              <p>{this.state.dropdown_header}</p>
              <img src="../assets/down-arrow.png" />
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

  return;
}

export default NavBar;

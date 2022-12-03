import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import { Dropdown } from "../../Styles/Navbar.styles";

class DropDown extends React.Component {
  render() {
    return (
      <Dropdown>
        <div onClick={this.props.showDropdown}>
          <p>{this.props.header}</p>
          <img src="../assets/down-arrow.png" alt="down-arrow" />
        </div>

        {this.props.clicked && (
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
    );
  }
}

export default DropDown;

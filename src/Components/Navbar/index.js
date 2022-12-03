import React from "react";
import { Nav, NavButton, Wrapper } from "../../Styles/Navbar.styles.js";
import DropDown from "./Dropdown.js";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    value: "",
    clicked: false,
    open: false,
  };

  showDropdown = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };
  showOverlay = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
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
          <DropDown
            showDropdown={this.showDropdown}
            header={this.props.header}
            clicked={this.state.clicked}
            currencies={this.props.currencies}
            changeCurrency={this.props.changeCurrency}
          />

          <Overlay
            showOverlay={this.showOverlay}
            selectedItems={this.props.selectedItems}
            open={this.state.open}
          />
        </Wrapper>
      </Nav>
    );
  }
}

export default NavBar;

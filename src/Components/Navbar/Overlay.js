import React from "react";
import CartOverlay from "../Cart/CartOverlay.js";

class Overlay extends React.Component {
  render() {
    return (
      <>
        <section>
          <img
            src="../assets/Empty_Cart.png"
            alt="Empty Cart"
            onClick={this.props.showOverlay}
          />
          <span>
            <p>{this.props.selectedItems}</p>
          </span>
        </section>

        {this.props.open && <CartOverlay />}
      </>
    );
  }
}

export default Overlay;

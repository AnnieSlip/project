import React from "react";
import SelectedProducts from "./SelectedProducts";
import { connect } from "react-redux";
import { Button_div } from "../../Styles/CartOverlay.styles";

class CartPage extends React.Component {
  render() {
    console.log(this.props);
    const item = this.props.selectedItems;
    return (
      <section>
        <hr />
        <SelectedProducts />
        <hr />
        <h5>Tax</h5>
        <h5>Quantity</h5>
        <h5>Total:</h5>

        <Button_div>
          <button style={{ width: 230 }}>Order</button>
        </Button_div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state,
  };
};

export default connect(mapStateToProps, null)(CartPage);

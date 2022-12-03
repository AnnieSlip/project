import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectedProducts from "./SelectedProducts";
import { Overlay, Button_div } from "../../Styles/CartOverlay.styles";

class CartOverlay extends React.Component {
  render() {
    const selectedItems = this.props.selectedItems;

    return (
      <Overlay>
        <h4>
          My bag,{" "}
          <p style={{ display: "inline", fontWeight: 400 }}>
            {selectedItems.length} item
          </p>
        </h4>

        <SelectedProducts />

        <Button_div>
          <Link to={"/cart"}>
            <button>View Bag</button>
          </Link>
          <button>Check Out </button>
        </Button_div>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state,
  };
};

export default connect(mapStateToProps, null)(CartOverlay);

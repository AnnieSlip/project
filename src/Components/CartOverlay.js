import React from "react";
import { connect } from "react-redux";
import { Attribute_btn } from "../Styles/SingleProduct.styles";
import {
  Overlay,
  SingleSelectedProduct,
  Buttons,
  Button_div,
} from "../Styles/CartOverlay.styles";

class CartOverlay extends React.Component {
  render() {
    const selectedItems = this.props.selectedItems;
    // console.log(selectedItems);

    return (
      <Overlay>
        <h4>
          My bag,{" "}
          <p style={{ display: "inline", fontWeight: 400 }}>
            {selectedItems.length} item
          </p>
        </h4>
        {selectedItems.map((item) => {
          console.log(item);
          item.quantity = 1;
          return (
            <SingleSelectedProduct key={item.id}>
              <div>
                <h4>{item.brand}</h4>
                <h5>{item.name}</h5>

                {item.attributes.map((attribute) => {
                  item.quantity = 1;

                  return (
                    <div key={attribute.id}>
                      <h4>{attribute.name}:</h4>

                      {attribute.items.map((item) => {
                        return (
                          <Attribute_btn
                            key={item.id}
                            style={{
                              background: item.value,
                              padding: 10,
                              margin: 2,
                            }}
                          >
                            {attribute.type === "text" ? item.value : " "}
                          </Attribute_btn>
                        );
                      })}
                    </div>
                  );
                })}
                <h4>Total: </h4>
              </div>
              <Buttons>
                <button
                  onClick={() =>
                    this.props.dispatch({ type: "INCREMENT", payload: item })
                  }
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    this.props.dispatch({ type: "DECREMENT", payload: item })
                  }
                >
                  -
                </button>
              </Buttons>

              <img style={{ width: 100 }} src={item.gallery[0]} />
            </SingleSelectedProduct>
          );
        })}

        <Button_div>
          <button>View Bag</button>
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

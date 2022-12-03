import React from "react";
import { Attribute_btn } from "../../Styles/SingleProduct.styles";
import {
  SingleSelectedProduct,
  Buttons,
} from "../../Styles/CartOverlay.styles";
import { connect } from "react-redux";

class SelectedProducts extends React.Component {
  render() {
    const selectedItems = this.props.selectedItems;
    return (
      <>
        {selectedItems.map((item) => {
          console.log(item);
          item.quantity = 1;
          return (
            <>
              <div
                style={{
                  display: "flex",
                  width: "90%vw",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <SingleSelectedProduct
                  key={item.id}
                  style={{
                    width: "80%",
                    justifyContent: "space-between",
                  }}
                >
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
                        this.props.dispatch({
                          type: "INCREMENT",
                          payload: item,
                        })
                      }
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() =>
                        this.props.dispatch({
                          type: "DECREMENT",
                          payload: item,
                        })
                      }
                    >
                      -
                    </button>
                  </Buttons>
                </SingleSelectedProduct>
                <img
                  style={{ width: 100, height: 100 }}
                  src={item.gallery[0]}
                />
              </div>
            </>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state,
  };
};

export default connect(mapStateToProps, null)(SelectedProducts);

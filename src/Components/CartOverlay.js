import React from "react";
import { connect } from "react-redux";
import { Attribute_btn } from "../Styles/SingleProduct.styles";
import {
  SingleSelectedProduct,
  Buttons,
  Button_div,
} from "../Styles/CartOverlay.styles";

class CartOverlay extends React.Component {
  render() {
    const selectedItems = this.props.selectedItems;
    console.log(selectedItems);

    return (
      <section>
        {selectedItems.map((item) => {
          return (
            <SingleSelectedProduct key={item.id}>
              <div>
                <h4>{item.brand}</h4>
                <h5>{item.name}</h5>

                {item.attributes.map((attribute) => {
                  return (
                    <div key={attribute.id}>
                      <h4>{attribute.name}:</h4>

                      {attribute.items.map((item) => {
                        return (
                          <Attribute_btn
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
              </div>
              <Buttons>
                <button>+</button>
                <p>1</p>
                <button>-</button>
              </Buttons>
              <img style={{ width: 100 }} src={item.gallery[0]} />
            </SingleSelectedProduct>
          );
        })}

        <Button_div>
          <button>View Bag</button>
          <button>Check Out </button>
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

export default connect(mapStateToProps, null)(CartOverlay);

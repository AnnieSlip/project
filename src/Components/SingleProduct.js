import React from "react";
import {
  Wrapper,
  Photo,
  Add_Button,
  Description,
  Attribute_btn,
} from "../Styles/SingleProduct.styles";

import { connect } from "react-redux";

const ProductContext = React.createContext();

class SingleProduct extends React.Component {
  state = {
    numberOfProducts: 0,
    product: "",
  };

  changePicture = (e) => {
    document.getElementById("main_photo").src = e.target.src;
  };

  addProductInCart = (product) => {
    this.setState((prevState) => ({
      numberOfProducts: prevState.numberOfProducts + 1,
      product: { product },
    }));

    console.log(this.state);
  };

  render() {
    // console.log(this.props);
    const { products } = this.props;
    const paramsId = window.location.pathname.split("/")[2];
    const product = products.find((product) => product.id === paramsId);

    const currency = product?.prices.find(
      (currency) => currency.currency.label == this.props.currency
    );

    if ((products, product)) {
      return (
        <ProductContext.Provider value={this.state}>
          <Wrapper>
            <div>
              {product.gallery.map((img, index) => {
                return (
                  <img src={img} key={index} onClick={this.changePicture} />
                );
              })}
            </div>

            <Photo>
              <img id="main_photo" src={product.gallery[0]}></img>
            </Photo>

            <Description>
              <h2>{product.name}</h2>
              <h3>{product.brand}</h3>

              {product?.attributes.map((attribute) => {
                return (
                  <div key={attribute.id}>
                    <h4>{attribute.name}</h4>

                    {attribute.items.map((item) => {
                      return (
                        <Attribute_btn
                          key={item.id}
                          style={{
                            background: item.value,
                          }}
                        >
                          {attribute.type === "text" ? item.value : " "}
                        </Attribute_btn>
                      );
                    })}
                  </div>
                );
              })}

              <h4>PRICE: </h4>

              <h3>
                {currency.currency.symbol} {currency.amount}
              </h3>

              <Add_Button
                onClick={() =>
                  this.props.dispatch({ type: "ADD", payload: product })
                }
              >
                Add to cart
              </Add_Button>

              {/* <Add_Button onClick={() => this.addProductInCart(product)}>
                Add to cart
              </Add_Button> */}

              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </Description>
          </Wrapper>
        </ProductContext.Provider>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state,
  };
};

export default connect(mapStateToProps, null)(SingleProduct);

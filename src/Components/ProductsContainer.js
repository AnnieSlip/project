import React from "react";
import { Article, Section } from "../Styles/ProductContainer.styles";

class Single_Product_Cart extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Section>
        {this.props.products.map((product) => {
          return (
            <Article key={product.id}>
              <img src={product.gallery[0]} />
              <h4>{product.name}</h4>
              <span>$ price</span>
            </Article>
          );
        })}
      </Section>
    );
  }
}

export default Single_Product_Cart;

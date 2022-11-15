import React from "react";
import { Article, Section } from "../Styles/ProductContainer.styles";
import CategoryInput from "./CategoryInput";

class ProductsContainer extends React.Component {
  render() {
    return (
      <>
        <CategoryInput />
        <Section>
          {this.props.products.map((product) => {
            return (
              <Article
                key={product.id}
                onClick={() =>
                  (window.location.href = `/product/${product.id}`)
                }
              >
                <img src={product.gallery[0]} />
                <h4>{product.name}</h4>
                <span>$ price</span>
              </Article>
            );
          })}
        </Section>
      </>
    );
  }
}

export default ProductsContainer;

import React from "react";
import { Article, Section } from "../Styles/ProductContainer.styles";
import CategoryInput from "./CategoryInput";
import { Link } from "react-router-dom";

class ProductsContainer extends React.Component {
  render() {
    return (
      <>
        <CategoryInput />

        <Section>
          {/* Find the price and currency for the products */}
          {this.props.products.map((product) => {
            const currency = product.prices.find(
              (currency) => currency.currency.label == this.props.currency
            );

            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Article>
                  <img src={product.gallery[0]} />
                  <h4>{product.name}</h4>
                  <span>
                    {currency.currency.symbol} {currency.amount}
                  </span>
                </Article>
              </Link>
            );
          })}
        </Section>
      </>
    );
  }
}

export default ProductsContainer;

import React from "react";

class SingleProduct extends React.Component {
  render() {
    const { products, id } = this.props;
    const product = products.find((product) => product.id == id);
    console.log(product);

    return (
      <section>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </section>
    );
  }
}

export default SingleProduct;

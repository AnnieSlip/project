import React from "react";
import {
  Wrapper,
  Photo,
  Add_Button,
  Description,
  Size_Button,
} from "../Styles/SingleProduct.styles";

class SingleProduct extends React.Component {
  state = {};

  render() {
    const { products } = this.props;
    const paramsId = window.location.pathname.split("/")[2];
    const product = products.find((product) => product.id === paramsId);

    console.log(this.props);

    if ((products, product)) {
      return (
        <Wrapper>
          <div>
            {product.gallery.map((img, index) => {
              return <img src={img} key={index} />;
            })}
          </div>

          <Photo>
            <img src={product.gallery[0]}></img>
          </Photo>

          <Description>
            <h2>{product.name}</h2>
            <h3>{product.brand}</h3>
            <h4>SIZE:</h4>
            <Size_Button>XS</Size_Button>
            <Size_Button>XS</Size_Button>
            <Size_Button>XS</Size_Button>
            <Size_Button>XS</Size_Button>
            <Size_Button>XS</Size_Button>
            <h4>Color:</h4>
            <h4>price</h4>
            <Add_Button>Add to cart</Add_Button>
            <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
          </Description>
        </Wrapper>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default SingleProduct;

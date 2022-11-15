import React from "react";
import styled from "styled-components";

const Category = styled.h2`
  margin: 80px auto;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px; ;
`;

class CategoryName extends React.Component {
  render() {
    return <Category>Category Name</Category>;
  }
}

export default CategoryName;

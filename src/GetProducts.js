import React, { useEffect, useState } from "react";
import { CATEGORIES } from "./GraphQL/Queries";
import { graphql } from "@apollo/client/react/hoc";

class NavBar extends React.Component {
  state = {
    categories: [],
  };

  render() {
    console.log(this.props);
    // console.log(this.props.data.loading);
    // console.log(this.props.data.categories);

    return <div>Annie</div>;
  }
}

export default graphql(CATEGORIES)(NavBar);

import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query {
    Product {
      id
      category
      brand
      prices
    }
  }
`;

import { gql } from "@apollo/client";

// export const CATEGORIES = gql`
//   query categories {
//     categories {
//       name
//     }
//   }
// `;

export const NAVBAR_DATA = gql`
  query navBarData {
    categories {
      name
    }

    currencies {
      label
      symbol
    }
  }
`;

export const PRODUCTS = gql`
  query products {
    categories {
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
      }
    }
  }
`;

// export const CURRENCY = gql`
//   query currency {
//     currencies {
//       label
//       symbol
//     }
//   }
// `;

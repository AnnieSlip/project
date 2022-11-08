import { gql } from "@apollo/client";

// export const LOAD_PRODUCTS = gql`
//   query {
//     categories {
//       name
//       products {
//         id
//         name
//         inStock
//         gallery
//         description
//         category
//         # attributes,
//         # prices,
//         brand
//       }
//     }
//   }
// `;

export const CATEGORIES = gql`
  query categories {
    categories {
      name
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

export const CURRENCY = gql`
  query currency {
    currencies {
      label
      symbol
    }
  }
`;

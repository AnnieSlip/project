export const DATA = `
query  {
  categories{
    name
  }

    currencies{
      label,
      symbol
    
  }

  categories{
    products{
      id,
      name, 
      inStock,
      gallery,
      description,
      category,
      brand,
      attributes{
        id,
        name,
        type,
        items{
          displayValue,
          value,
          id
        
        }
        
        
        
      }
      prices{currency{
        label,
        symbol},
        
        amount
      }
    }
  }

}`;

// query {
//   categories{
//     name
//   }

//     currencies{
//       label,
//       symbol

//   }

//   categories{
//     products{
//       id,
//       name,
//       inStock,
//       gallery,
//       description,
//       category,
//       brand
//     }
//   }

// }
// `;

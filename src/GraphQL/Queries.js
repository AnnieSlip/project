export const DATA = `
query {
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
      brand
    }
  }

}
`;

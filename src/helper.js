export const filterItems = (categoryy) => {
    this.setState((prevState) => ({
      products: categoryy.products,
      switch: true,
    }));
  };
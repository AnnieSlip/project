const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempCart = cart.filter((item) => item.id === action.payload.id);
    if (tempCart < 1) {
      return [...cart, action.payload];
    }
  }

  if (action.type === "INCREMENT") {
    let tempCart = cart.map((item) => {
      let tempQuantity = item.quantity + 1;
      console.log(item.quantity + 1);
      if (item.id === action.payload.id) {
        if (item.inStock === true) {
          return { ...item, quantity: tempQuantity };
        }
      }
      return item;
    });
    return tempCart;
  }

  return cart;
};

export default Reducer;

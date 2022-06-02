const initialState = {
  cards: [],
};

const CardReducers = (state = initialState.cards, action) => {
  if (action.type === "ADD_CARD") {
    const cartProduct = state.find((q) => q.id === action.payload.id);

    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity + 1;
      return [...state];
    } else {
      const newCartProduct = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.unitPrice,
        quantity: 1,
      };
      return [...state, newCartProduct];
    }
  } else if (action.type === "DECREASE_CARD") {
    //Eğer sepette ürün yoksa  zaten bu fonksiyon çalışmamalı

    const cartProduct = state.find((q) => q.id === action.payload.id);

    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity - 1;

      //Eğer ürün adedi 0 olduysa onu sepetten de çıkarmamız gerek
      if (cartProduct.quantity === 0) {
        const newCart = state.filter((q) => q.id !== cartProduct.id);

        return newCart;
      } else {
        return state;
      }
    }
  } else if (action.type === "DELETE_CARD") {
    const newCard = state.filter((q) => q.id != action.payload);

    return newCard;
  } else if (action.type === "REMOVEALL_CARD") {
    state = [];
    return state;
  } else {
    return state;
  }
};

export default CardReducers;

export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((pre, next) => next.price + pre, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;

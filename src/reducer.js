export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) => {
  let total = basket?.reduce((pre, next) => next.price + pre, 0);
  console.log(total);
  return total;
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in baskets, remove it
        newBasket.splice(index, 1);
      } else {
        //item dose not exist
        console.warn(
          `Can't remove product (id: ${action.id}) as  it's not in the basket.`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;

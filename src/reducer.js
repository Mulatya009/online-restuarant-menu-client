export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      // logic to determine wether user is logged in or out
      return {
        ...state,
        user: action.user,
      };
      break;
    case "ADD_TO_BASKET":
      // logic to add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case "REMOVE_FROM_BASKET":
      // logic to remove item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exist remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      break;

    default:
      return state;
  }
}

export default reducer;

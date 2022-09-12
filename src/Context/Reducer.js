export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "SET_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.name !== action.payload.name),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "ON_DELETE_ALL_ITEMS_FROM_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

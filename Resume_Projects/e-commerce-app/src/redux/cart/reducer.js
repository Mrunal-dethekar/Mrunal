import { ADD_ITEM } from "./action";
import { DELETE_ITEM } from "./action";

const intialState = [];

const handleCart = (state = intialState, action) => {
  const product = action.payload;
  // Check if product is already exit
  const exist = state.find((item) => item.id === product.id);
  console.log(state)
  switch (action.type) {
    case ADD_ITEM: {
      if (exist) {
        // Increase Quantity
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          }
        ];
      }
      break;
    }
    case DELETE_ITEM: {
      if (exist.quantity === 1) {
        return state.filter((item) => product.id !== item.id);
      } else {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      break;
    }

    default:
      return [...intialState];
  }
};

export default handleCart;
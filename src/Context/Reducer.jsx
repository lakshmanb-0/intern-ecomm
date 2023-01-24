export const initialstate = {
  cartdata: [],
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return {
        ...state,
        cartdata: [...state.cartdata, action.payload],
      };
    }
    case "REMOVE_DATA": {
      return {
        ...state,
        cartdata: state.cartdata.filter((item) => item.id !== action.payload),
      };
    }
    case "QTY_INCREASE": {
      return {
        ...state,
        cartdata: state.cartdata.map((item) => {
          if (item.id === action.payload) {
            return { ...item, qty: Number(item.qty) + 1 };
          }
          return item;
        }),
      };
    }
    case "QTY_DECREASE": {
      return {
        ...state,
        cartdata: state.cartdata.map((item) => {
          if (item.id === action.payload) {
            return { ...item, qty: Number(item.qty) - 1 };
          }
          return item;
        }),
      };
    }
    case "QTY_INCREASE_INPUT": {
      return {
        ...state,
        cartdata: state.cartdata.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: action.payload.qty };
          }
          return item;
        }),
      };
    }
    case "RESET": {
      return {
        cartdata: [],
      };
    }

    default: {
      return state;
    }
  }
};

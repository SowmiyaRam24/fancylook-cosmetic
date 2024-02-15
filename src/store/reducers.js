const initialState = {
  products: [],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
          price: updatedCart[existingItemIndex].price + action.payload.price,
        };
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1,
              price: item.price + (item.price / item.quantity),
             };
          }
          return item;
        }),
      };
      
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item => {
            if (item.id === action.payload) {
              const newQuantity = item.quantity - 1;
              const newPrice = newQuantity > 0 ? item.price - (item.price / item.quantity) : 0;
              return { ...item, quantity: newQuantity, price: newPrice };
            }
            return item;
          }).filter(item => item.quantity !== 0),
        };
    default:
      return state;
  }
};

export default rootReducer;

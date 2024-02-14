// src/store/reducers/rootReducer.js
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
        // Check if the item already exists in the cart
        const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
          // If the item already exists, update its quantity
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity + 1, // Increase quantity by 1
          };
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          // If the item does not exist, add it to the cart with quantity 1
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
              return { ...item, quantity: item.quantity + 1 }; // Increase quantity by 1
            }
            return item;
          }),
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item => {
            if (item.id === action.payload && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }; // Decrease quantity by 1, minimum quantity is 1
            }
            return item;
          }),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
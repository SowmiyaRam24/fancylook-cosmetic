
export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
export const fetchProductsSuccess = (products) => {
    return {
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: products,
    };
  };
  export const increaseQuantity = (productId) => {
    return {
      type: 'INCREASE_QUANTITY',
      payload: productId,
    };
  };
  
  export const decreaseQuantity = (productId) => {
    return {
      type: 'DECREASE_QUANTITY',
      payload: productId,
    };
  };

  
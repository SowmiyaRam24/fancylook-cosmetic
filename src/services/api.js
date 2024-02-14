
// import axios from 'axios';

// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get('https://dummyjson.com/products');
//     return response.data;
//     // console.log(response.data)
//   } catch (error) {
//     console.error('Error fetching products: ', error);
//     return [];
//   }
// };
import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products: ', error);
    return [];
  }
};
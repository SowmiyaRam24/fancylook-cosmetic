
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';


const ListItem = ({ product, addToBag }) => { 
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setTimeout(() => {
      alert('Product added to cart!');
    }, 1000); 
  };
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
};

export default ListItem;

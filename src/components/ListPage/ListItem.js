
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';

const ListItem = ({ product}) => { 
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setTimeout(() => {
      alert('Product added to cart!');
    }, 1000); 
  };
  return (
    <li>
         <Link to={`/detail/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <p style={{textAlign:'center'}}>{product.title}</p>
      <div style={{display:"flex",justifyContent:'center'}}>
      <button style={{color:'red',width:'99px'}}>${product.price}</button>
      <button onClick={handleAddToCart} className='buttons'>Add to Cart</button>
      </div>
    </li>
  );
};

export default ListItem;

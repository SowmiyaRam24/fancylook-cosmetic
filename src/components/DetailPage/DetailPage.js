
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../../store/actions';
import './DetailPage.css'; 

const DetailPage = () => {
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToBag = (product) => {
    dispatch(addToCart(product));
    const { title, quantity, thumbnail } = product;
    setTimeout(() => {
      alert(`Product: ${title}\nQuantity: ${quantity}\nImage: ${thumbnail}\nSuccessfully added to bag!`);
    }, 3000);
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <div className="detail-page"> 
      <h1>Detail Page</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncreaseQuantity(item.id)}>Increase Quantity</button>
            <button onClick={() => handleDecreaseQuantity(item.id)}>Decrease Quantity</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailPage;

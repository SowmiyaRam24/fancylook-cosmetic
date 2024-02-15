import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../store/actions';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price , 0);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <div className="cart-container">
      <h1>Cart Details</h1>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <div className="product-details">
              <img src={item.thumbnail} alt={item.title} />
              <div className="info">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
            <div className="quantity">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-price">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;

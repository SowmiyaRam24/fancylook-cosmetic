
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css'; 

const DetailPage = () => {
  const { id } = useParams();
  const products = useSelector(state => state.products);
  const product = products.find(product => product.id === parseInt(id));

  return (
    <div>

        <h1>DetailPage</h1>
    <div className="detail-container">
      <div className="card">
        {product && (
          <>
            <div className="image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="details">
              <h2>{product.title}</h2>
              <p className='des'><strong>Description:</strong>{product.description}</p>
              <p className='price'><strong>Price of the product:</strong> ${product.price}</p>
              <Link to="/" className="back-link"> <button>Back to List</button></Link>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default DetailPage;

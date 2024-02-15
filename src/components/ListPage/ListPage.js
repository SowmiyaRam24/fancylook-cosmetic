import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../services/api';
import ListItem from './ListItem';
import './ListPage.css'
const ListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="list-page">
      <h1 >List Page</h1>
      <ul>
        {products.map(product => (
          <ListItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ListPage;

// src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services/productService';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const productList = await getProducts(token);
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px', background: '#f0f2f5', minHeight: '100vh' }}>
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;

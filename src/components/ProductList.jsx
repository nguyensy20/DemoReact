// src/components/ProductList.jsx
import React from 'react';
import { List, Card } from 'antd';

const ProductList = ({ products }) => (
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={products}
    renderItem={product => (
      <List.Item>
        <Card
          title={product.name}
          extra={<a href="#">More</a>}
        >
          <p>{product.description}</p>
          <p>Category: {product.categoryName}</p>
          <p>Total in Chambers: {product.totalProductInChambers}</p>
        </Card>
      </List.Item>
    )}
  />
);

export default ProductList;

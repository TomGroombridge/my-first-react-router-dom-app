import React, { useEffect } from 'react';
import { useParams  } from 'react-router-dom';

const Product = () => {
  const params = useParams();

  useEffect(() => {
    console.log('fetch data for product', params.productId)
  }, [params.productId])

  return (
    <div>
      <h1>Product {params.productId}</h1>
    </div>
  );
};

export default Product;
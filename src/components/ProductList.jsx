import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Mouse", price: 50 }
  ];

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li 
            key={product.id}
            style={{
              color: product.price > 500 ? "red" : "black",
              fontWeight: product.price > 500 ? "bold" : "normal"
            }}
          >
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

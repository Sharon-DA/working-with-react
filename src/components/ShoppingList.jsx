import React from 'react';

const ShoppingList = () => {
  const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

  return (
    <div className="shopping-list">
      <h3>Shopping List</h3>
      <ul>
        {shoppingList.map((item, index) => (
          <li 
            key={index}
            style={{
              textDecoration: item === "Eggs" ? "line-through" : "none"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

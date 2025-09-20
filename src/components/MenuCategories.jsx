import React from 'react';

const MenuCategories = () => {
  const menu = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Spinach"] }
  ];

  return (
    <div className="menu-categories">
      <h3>Menu Categories</h3>
      {menu.map((section, index) => (
        <div key={index} className="menu-section">
          <h4>{section.category}</h4>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;

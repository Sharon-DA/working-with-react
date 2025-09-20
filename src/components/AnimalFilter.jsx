import React from 'react';

const AnimalFilter = () => {
  const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];

  // Filter animals that start with "E"
  const filteredAnimals = animals.filter(animal => animal.startsWith("E"));

  return (
    <div className="animal-filter">
      <h3>Animals Starting with "E"</h3>
      <p>Original list: {animals.join(", ")}</p>
      <ul>
        {filteredAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalFilter;

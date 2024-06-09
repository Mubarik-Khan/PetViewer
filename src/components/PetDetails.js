import React from 'react';
import './PetDetails.css';

const PetDetails = ({ pet }) => {
  return (
    <div className="pet-details">
      <h2>{pet.name}</h2>
      <ul>
        <li><strong>Type:</strong> {pet.type}</li>
        <li><strong>Breed:</strong> {pet.breed}</li>
        <li><strong>Weight:</strong> {pet.weight}</li>
        <li><strong>Color:</strong> {pet.color}</li>
      </ul>
    </div>
  );
};

export default PetDetails;



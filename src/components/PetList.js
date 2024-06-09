import React from 'react';
import './PetList.css';

const PetList = ({ pets, onPetSelect }) => {
  const handleSelectChange = (event) => {
    onPetSelect(Number(event.target.value));
  };

  return (
    <div className="pet-list">
      <select onChange={handleSelectChange}>
        <option value="">Select a pet</option>
        {pets.map((pet) => (
          <option key={pet.id} value={pet.id}>
            {pet.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PetList;


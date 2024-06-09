import React, { useState, useEffect } from 'react';
import './App.css';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import Footer from './components/Footer';
import { fetchPets } from './api/api';

function App() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        console.log('Fetching pets...');
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (error) {
        console.error('Error fetching pets:', error);
        setError(error.message);
      }
    };

    getPets();
  }, []);

  const handlePetSelect = (petId) => {
    const pet = pets.find(p => p.id === petId);
    setSelectedPet(pet);
  };

  return (
    <div className="App">
      <header>
        <h1>Pet Viewer</h1>
      </header>
      <h1>Select Pet of your choice</h1>
      <br></br>
      {error && <p>Error: {error}</p>}
      <PetList pets={pets} onPetSelect={handlePetSelect} />
      {selectedPet && <PetDetails pet={selectedPet} />}
      <Footer />
    </div>
  );
}

export default App;


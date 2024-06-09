const API_URL = 'https://run.mocky.io/v3/140e1aa6-3642-4099-885c-27b17ef9ecfa';

export const fetchPets = async () => {
  try {
    console.log('Fetching pets from API:', API_URL);
    const response = await fetch(API_URL);
    console.log('Response:', response);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched pets data:', data);
    return data.pets;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};



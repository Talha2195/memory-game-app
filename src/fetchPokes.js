export async function fetchPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12'); 
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      return data.results;
      
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error; 
    }
  }
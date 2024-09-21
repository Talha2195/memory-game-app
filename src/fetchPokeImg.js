import { fetchPokemon } from "./fetchPokes";
import { fetchPokemonDetails } from "./fetchPokeDetails";

export async function fetchPokemonImages () {
try {
        const pokemonList = await fetchPokemon()
        const urls = pokemonList.map(pokemon => pokemon.url)
        const pokemonDetailsPromises = urls.map(url => fetchPokemonDetails(url))
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        const pokemonImages = pokemonDetails.map(poks => poks.sprites.front_default)
        const spritesWithIds = pokemonImages.map((url, index) => ({
            id: index + 1,  
            url: url,
          }));
    return spritesWithIds

} catch (error) {
    console.log ("Couldn't do it chief")
    throw error;
}
}
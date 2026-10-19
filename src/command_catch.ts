import { State } from "./state.js";
import { Pokemon } from "./pokemon_type.js";

export async function commandCatch(state: State, pokemon: string) {
    if (!pokemon) {
        console.log("Usage: catch <pokemon>");
        return;
    }
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const response = await fetch(url, {
        method: "GET"
    });

    if (!response.ok) {
          throw new Error(`Request failed: ${response.statusText}`);
    }

    const result: Pokemon = await response.json();
    const catchChance = Math.max(
        0.03,
        1 - (result.base_experience / 340));
    
    
    const isCaught = Math.random() < catchChance;

    if (isCaught) {
        console.log(`${pokemon} was caught!`);
        state.pokedex[result.name] = result;
    }
    else {
        console.log(`${pokemon} escaped!`);
    }
    
}
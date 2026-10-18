import { State } from "./state.js";

export async function commandExplore (state: State, locationArea: string) {
    if (!locationArea) {
        console.log("Usage: explore <location-area>");
        return;
    }
    const results = await state.api.fetchLocation(locationArea);
    const pokemonEncounters = results.pokemon_encounters.map((obj) => obj.pokemon.name);
    pokemonEncounters.forEach((pokemon) => console.log(pokemon));
}
import { State } from "./state.js";

export async function commandInspect(state: State, pokemon: string) {
    if (!pokemon) {
        console.log("Usage: inspect <pokemon>");
        return;
    }
    if (!(pokemon in state.pokedex)) {
        console.log("you have not caught that pokemon");
        return;
    }

    const pokemonFound = state.pokedex[pokemon]

    console.log(`Name: ${pokemonFound.name}`);
    console.log(`Height: ${pokemonFound.height}`);
    console.log(`Weight: ${pokemonFound.weight}`);

    console.log("Stats:");
    pokemonFound.stats.forEach((stat) => {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    });

    console.log("Types:");
    pokemonFound.types.forEach((type) => {
        console.log(`  - ${type.type.name}`);
    });
}
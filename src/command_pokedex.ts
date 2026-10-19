import { State } from "./state.js";

export async function commandPokedex(state: State) {
    console.log("Pokedex:");
    for (const name in state.pokedex) {
        console.log(`  - ${name}`);
    }
}
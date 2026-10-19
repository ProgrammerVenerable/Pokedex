import { CLICommand, getCommands } from "./CLI_Commands.js";
import { createInterface, type Interface } from "readline";
import { Pokemon } from "./pokemon_type.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    commands: Record<string, CLICommand>;
    readline: Interface;
    api: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
    pokedex: Record<string, Pokemon>
}

export async function initState(): Promise<State> {
    const commands: Record<string, CLICommand> = getCommands();
    const readline: Interface = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex> ",
    });
    const api = new PokeAPI();
    return {
        commands,
        readline,
        api,
        nextLocationsURL: null,
        prevLocationsURL: null,
        pokedex: {}
    };
}
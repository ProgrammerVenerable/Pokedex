import { CLICommand } from "./CLI_Commands.js"
import { State } from "./state.js";

export function commandHelp(state: State): void {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    const arr: CLICommand[] = Object.values(state.commands);
    arr.forEach((c) => console.log(`${c.name}: ${c.description}`));
}
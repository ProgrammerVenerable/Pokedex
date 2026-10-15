import { CLICommand, getCommands } from "./CLI_Commands.js";
import { createInterface, type Interface } from "readline";

export type State = {
    commands: Record<string, CLICommand>;
    readline: Interface;
}

export function initState(): State {
    const commands: Record<string, CLICommand> = getCommands();
    const readline: Interface = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex> ",
    });
    return {
        commands,
        readline
    };
}
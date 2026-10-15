import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js"
import { State } from "./state.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
}

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit
        },
        help: {
            name: "help",
            description: "Displays help message",
            callback: commandHelp
        }
    }
}

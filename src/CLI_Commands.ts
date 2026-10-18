import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_map_back.js";
import { commandExplore } from "./command_explore.js";
import { State } from "./state.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
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
        },
        map: {
            name: "map",
            description: "Displays 20 location areas",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 location areas",
            callback: commandMapb
        },
        explore: {
            name: "explore",
            description: "Explores a location area",
            callback: commandExplore
        }
    }
}

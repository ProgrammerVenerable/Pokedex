import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_map_back.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inpect.js";
import { commandPokedex } from "./command_pokedex.js";
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
        },
        catch: {
            name: "catch",
            description: "Catch a pokemon and keep it in your pokedex",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Inspects the pokemon you caught/in your pokedex",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "Lists alll the pokemon caught",
            callback: commandPokedex
        }
    }
}

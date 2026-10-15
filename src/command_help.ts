import { CLICommand } from "./CLI_Commands.js"

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    const arr: CLICommand[] = Object.values(commands);
    arr.forEach((c) => console.log(`${c.name}: ${c.description}`));
}
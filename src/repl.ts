import { createInterface } from "node:readline";
import { getCommands } from "./CLI_Commands.js";

export function cleanInput(input: string): string[] {
    const cleaned = input.trim();
    if (cleaned === "") return [];
    const arr = cleaned.split(/\s+/);
    return arr.map((str) => str.toLocaleLowerCase());
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex> ",
    })

    rl.prompt();
    rl.on("line", (line) => {
        const cleanedInputs = cleanInput(line);
        if (cleanedInputs.length == 0){
            rl.prompt();
            return;
        }
        const availableCommands = getCommands();
        const usersCommand: string = cleanedInputs[0];
        try {
            if (usersCommand in availableCommands) {
                availableCommands[usersCommand].callback(availableCommands);
            }
            else {
                console.log("Unknown command");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
        rl.prompt();
    })
}
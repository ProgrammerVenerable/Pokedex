import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";

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
        if (cleanedInputs[0] == "exit") commandExit();
        console.log(`Your command was:`, cleanedInputs[0]);
        rl.prompt();
    })
}
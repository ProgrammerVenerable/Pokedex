import { createInterface } from "node:readline";

export function cleanInput(input: string): string[] {
    const arr = input.trim().split(/\s+/);
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
        if (cleanInput.length == 0){
            rl.prompt();
            return;
        }
        console.log("Your command was:", cleanedInputs[0]);
        rl.prompt();
    })
}
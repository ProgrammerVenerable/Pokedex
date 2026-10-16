import { getCommands } from "./CLI_Commands.js";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const cleaned = input.trim();
    if (cleaned === "") return [];
    const arr = cleaned.split(/\s+/);
    return arr.map((str) => str.toLocaleLowerCase());
}

export function startREPL(state: State) {
    state.readline.prompt();
    state.readline.on("line", async (line) => {
        const cleanedInputs = cleanInput(line);
        if (cleanedInputs.length == 0){
            state.readline.prompt();
            return;
        }
        const usersCommand: string = cleanedInputs[0];
        try {
            if (usersCommand in state.commands) {
                await state.commands[usersCommand].callback(state);
            }
            else {
                console.log("Unknown command");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
        state.readline.prompt();
    })
}
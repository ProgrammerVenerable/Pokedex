import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
    try{
        const state = await initState();
        startREPL(state);
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

main();
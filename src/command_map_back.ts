import { State } from "./state.js";

export async function commandMapb(state: State) {
    if (state.prevLocationsURL === null) {
        console.log("you're on the first page");
        return;
    }
    const locations = await state.api.fetchLocations(state.prevLocationsURL);
    
    locations.results.forEach((result) => console.log(result.name));

    state.prevLocationsURL = locations.previous;
    state.nextLocationsURL = locations.next;
}
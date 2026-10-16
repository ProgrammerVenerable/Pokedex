import { State } from "./state.js";

export async function commandMap(state:State) {
    const locations = await state.api.fetchLocations( state.nextLocationsURL ?? undefined );
    locations.results.forEach((result) => console.log(result.name));
    state.prevLocationsURL = locations.previous;
    state.nextLocationsURL = locations.next;
}
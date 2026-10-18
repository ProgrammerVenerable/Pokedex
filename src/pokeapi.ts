import { Cache } from "./pokecache.js";

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Result [];
}

export type Result = {
        name: string;
        url: string;
    }

    // 2. Localization
export type LocalizedName = {
  name: string;
  language: Result;
};

// 3. Encounter Method Rates
export type EncounterVersionDetail = {
  rate: number;
  version: Result;
};

export type EncounterMethodRate = {
  encounter_method: Result;
  version_details: EncounterVersionDetail[];
};

// 4. Detailed Encounter Types
// condition_values represent things like time of day or swarm status
export type EncounterConditionValue = {
  name: string;
  url: string;
};

// pokemon_details usually contains form data, but often returns null 
// or empty arrays on the location-area endpoint unless a specific form is locked
export type PokemonEncounterDetail = {
  form: Result;
  // Other potential properties depend on the specific endpoint configuration
};

export type EncounterDetail = {
  min_level: number;
  max_level: number;
  chance: number;
  method: Result;
  condition_values: EncounterConditionValue[];
  pokemon_details: PokemonEncounterDetail[] | null; 
};

export type PokemonVersionDetail = {
  version: Result;
  max_chance: number;
  encounter_details: EncounterDetail[];
};

export type PokemonEncounter = {
  pokemon: Result;
  version_details: PokemonVersionDetail[];
};

// 5. The Root Object
export type Location = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: Result;
  names: LocalizedName[];
  pokemon_encounters: PokemonEncounter[];
};


export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2/location-area";
    private cache: Cache = new Cache(300000);

    constructor () {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = PokeAPI.baseURL;
        if (pageURL) {
            url = pageURL;
        }

        const cacheMatch = this.cache.get(url);
        if (cacheMatch) {
          return cacheMatch.val;
        }

        const response = await fetch(url,{
            method: "GET"
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }


        const result = await response.json() as ShallowLocations;
        this.cache.add(url, result);

        return result;
    }

	async fetchLocation(locationName: string): Promise<Location> {
		const url = `${PokeAPI.baseURL}/${locationName}`;
		const cacheMatch = this.cache.get(url);
		if (cacheMatch) {
			return cacheMatch.val;
		}
		const response = await fetch(url,{
				method: "GET"
		});

		if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

		const result = await response.json() as Location;
			this.cache.add(url, result);

		return result;
	}
}
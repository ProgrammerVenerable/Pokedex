# Pokedex

A command-line Pokédex built with TypeScript using the [PokéAPI](https://pokeapi.co/).

The application lets you explore Pokémon locations, discover Pokémon, catch them, and inspect the Pokémon you have collected.

## Features

- Browse Pokémon location areas
- Move forward and backward through location results
- Explore an area to see which Pokémon can be found there
- Catch Pokémon with a probability based on their base experience
- Store caught Pokémon in your Pokédex
- Inspect a caught Pokémon's stats and types
- Cache API responses
- Interactive command-line REPL

## Commands

```text
help
map
mapb
explore <location>
catch <pokemon>
inspect <pokemon>
pokedex
exit
```

Example:

```text
Pokedex> explore pastoria-city-area

Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
```

Catch a Pokémon:

```text
Pokedex> catch pikachu

Throwing a Pokeball at pikachu...
pikachu was caught!
```

Inspect a caught Pokémon:

```text
Pokedex> inspect pikachu

Name: pikachu
Height: 4
Weight: 60
Stats:
  - hp: 35
  - attack: 55
Types:
  - electric
```

## Installation

Clone the repository:

```bash
git clone https://github.com/ProgrammerVenerable/Pokedex.git
cd Pokedex
```

Install dependencies:

```bash
npm install
```

## Running the Project

Compile and run:

```bash
npm run dev
```

Or build and run separately:

```bash
npm run build
npm start
```

## Tests

Run the tests with:

```bash
npm test
```

## Built With

- TypeScript
- Node.js
- PokéAPI
- Vitest

## About

This project was built as part of the Boot.dev backend development curriculum to practice TypeScript, APIs, caching, CLI applications, and asynchronous programming.

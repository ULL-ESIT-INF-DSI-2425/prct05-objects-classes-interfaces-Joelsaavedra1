import { describe, expect, test } from "vitest";
import { Pokemon, PokemonType } from "../../src/ejercicio-1/pokemon";
import { Pokedex } from "../../src/ejercicio-1/pokedex";

const charizard = new Pokemon(
  "Charizard",
  905,
  17.7,
  PokemonType.Fire,
  78,
  84,
  78,
  100,
);
const blastoise = new Pokemon(
  "Blastoise",
  855,
  16.9,
  PokemonType.Water,
  79,
  83,
  100,
  78,
);
const pikachu = new Pokemon(
  "Pikachu",
  60,
  0.4,
  PokemonType.Electric,
  35,
  55,
  40,
  90,
);
const venusaur = new Pokemon(
  "Venusaur",
  1000,
  2,
  PokemonType.Grass,
  80,
  82,
  83,
  80,
);

const aux_pokemon = new Pokemon(
  "X",
  905,
  16.9,
  PokemonType.Water,
  35,
  82,
  83,
  80,
);

const pokedex = new Pokedex([charizard, blastoise, pikachu, venusaur]);
const pokedex_empty = new Pokedex([]);

describe("Add pokemon tests", () => {
  test("pokedex.addPokemon(aux_pokemon) must add aux_pokemon to pokedex", () => {
    expect(pokedex.pokemons).not.toContain(aux_pokemon);
    pokedex.addPokemon(aux_pokemon);
    expect(pokedex.pokemons).toContain(aux_pokemon);
  });
});

describe("Remove pokemon tests", () => {
  test("pokedex.removePokemon(aux_pokemon) must remove aux_pokemon from pokedex", () => {
    expect(pokedex.pokemons).toContain(aux_pokemon);
    pokedex.removePokemon(aux_pokemon);
    expect(pokedex.pokemons).not.toContain(aux_pokemon);
  });
});

describe("Show all pokemons tests", () => {
  test("pokedex.showAllPokemons() returns the info of every pokemon", () => {
    const expected = `📜 Pokémon Info 📜
Nombre: Charizard
Tipo: fuego
Peso: 905 kg
Altura: 17.7 m
HP: 78
Ataque: 84
Defensa: 78
Velocidad: 100

📜 Pokémon Info 📜
Nombre: Blastoise
Tipo: agua
Peso: 855 kg
Altura: 16.9 m
HP: 79
Ataque: 83
Defensa: 100
Velocidad: 78

📜 Pokémon Info 📜
Nombre: Pikachu
Tipo: electrico
Peso: 60 kg
Altura: 0.4 m
HP: 35
Ataque: 55
Defensa: 40
Velocidad: 90

📜 Pokémon Info 📜
Nombre: Venusaur
Tipo: hierba
Peso: 1000 kg
Altura: 2 m
HP: 80
Ataque: 82
Defensa: 83
Velocidad: 80
`;
    expect(pokedex.showAllPokemons()).toBe(expected);
  });
  test("pokedex_empty.showAllPokemons() returns undefined", () => {
    expect(pokedex_empty.showAllPokemons()).toBe(undefined);
  });
});

describe("Search by name tests", () => {
  test("pokedex.searchByName('Pikachu') returns '📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n`;
    expect(pokedex.searchByName("Pikachu")).toBe(expected);
  });
  test("pokedex.searchByName('X') returns undefined", () => {
    expect(pokedex.searchByName("X")).toBe(undefined);
  });
});

describe("Search by type tests", () => {
  test("pokedex.searchByType(PokemonType.Water) returns '📜 Pokémon Info 📜\nNombre: Blastoise\nTipo: agua\nPeso: 855 kg\nAltura: 16.9 m\nHP: 79\nAtaque: 83\nDefensa: 100\nVelocidad: 78\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Blastoise\nTipo: agua\nPeso: 855 kg\nAltura: 16.9 m\nHP: 79\nAtaque: 83\nDefensa: 100\nVelocidad: 78\n`;
    expect(pokedex.searchByType(PokemonType.Water)).toBe(expected);
  });
  test("pokedex.searchByType(PokemonType.Normal) returns undefined", () => {
    pokedex.removePokemon(pikachu);
    expect(pokedex.searchByType(PokemonType.Electric)).toBe(undefined);
    pokedex.addPokemon(pikachu);
  });
});

describe("Search by HP tests", () => {
  test("pokedex.searchByHP(35) returns '📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n`;
    expect(pokedex.searchByHP(35)).toBe(expected);
  });
  test("pokedex.searchByHP(100) returns undefined", () => {
    expect(pokedex.searchByHP(100)).toBe(undefined);
  });
});

describe("Search by attack tests", () => {
  test("pokedex.searchByAttack(55) returns '📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n`;
    expect(pokedex.searchByAttack(55)).toBe(expected);
  });
  test("pokedex.searchByAttack(100) returns undefined", () => {
    expect(pokedex.searchByAttack(100)).toBe(undefined);
  });
});

describe("Search by defense tests", () => {
  test("pokedex.searchByDefense(78) returns '📜 Pokémon Info 📜\nNombre: Charizard\nTipo: fuego\nPeso: 905 kg\nAltura: 17.7 m\nHP: 78\nAtaque: 84\nDefensa: 78\nVelocidad: 100\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Charizard\nTipo: fuego\nPeso: 905 kg\nAltura: 17.7 m\nHP: 78\nAtaque: 84\nDefensa: 78\nVelocidad: 100\n`;
    expect(pokedex.searchByDefense(78)).toBe(expected);
  });
  test("pokedex.searchByDefense(110) returns undefined", () => {
    expect(pokedex.searchByDefense(110)).toBe(undefined);
  });
});

describe("Search by speed tests", () => {
  test("pokedex.searchBySpeed(90) returns '📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n`;
    expect(pokedex.searchBySpeed(90)).toBe(expected);
  });
  test("pokedex.searchBySpeed(110) returns undefined", () => {
    expect(pokedex.searchBySpeed(110)).toBe(undefined);
  });
});

describe("Search by height tests", () => {
  test("pokedex.searchByHeight(17.7) returns '📜 Pokémon Info 📜\nNombre: Charizard\nTipo: fuego\nPeso: 905 kg\nAltura: 17.7 m\nHP: 78\nAtaque: 84\nDefensa: 78\nVelocidad: 100\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Charizard\nTipo: fuego\nPeso: 905 kg\nAltura: 17.7 m\nHP: 78\nAtaque: 84\nDefensa: 78\nVelocidad: 100\n`;
    expect(pokedex.searchByHeight(17.7)).toBe(expected);
  });
  test("pokedex.searchByHeight(100) returns undefined", () => {
    expect(pokedex.searchByHeight(100)).toBe(undefined);
  });
});

describe("Search by weight tests", () => {
  test("pokedex.searchByWeight(60) returns '📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n'", () => {
    const expected = `📜 Pokémon Info 📜\nNombre: Pikachu\nTipo: electrico\nPeso: 60 kg\nAltura: 0.4 m\nHP: 35\nAtaque: 55\nDefensa: 40\nVelocidad: 90\n`;
    expect(pokedex.searchByWeight(60)).toBe(expected);
  });
  test("pokedex.searchByWeight(100) returns undefined", () => {
    expect(pokedex.searchByWeight(100)).toBe(undefined);
  });
});

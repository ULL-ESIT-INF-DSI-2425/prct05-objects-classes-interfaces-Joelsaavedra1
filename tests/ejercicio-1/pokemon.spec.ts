import { describe, expect, test } from "vitest";
import { Pokemon, PokemonType } from "../../src/ejercicio-1/pokemon";

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

describe("Name getter tests", () => {
  test("charizard.name() returns value 'Charizard'", () => {
    expect(charizard.name).toBe("Charizard");
  });
  test("blastoise.name() returns value 'Blastoise'", () => {
    expect(blastoise.name).toBe("Blastoise");
  });
});

describe("Weight getter tests", () => {
  test("pikachu.weight() returns value 905", () => {
    expect(pikachu.weight).toBe(60);
  });
  test("venusaur.weight() returns value 855", () => {
    expect(venusaur.weight).toBe(1000);
  });
});

describe("Height getter tests", () => {
  test("charizard.height() returns value 17.7", () => {
    expect(charizard.height).toBe(17.7);
  });
  test("blastoise.height() returns value 16.9", () => {
    expect(blastoise.height).toBe(16.9);
  });
});

describe("Type getter tests", () => {
  test("pikachu.type() returns value 'electrico'", () => {
    expect(pikachu.type).toBe("electrico");
  });
  test("venusaur.type() returns value 'hierba'", () => {
    expect(venusaur.type).toBe("hierba");
  });
});

describe("HP getter tests", () => {
  test("charizard.HP() returns value 78", () => {
    expect(charizard.HP).toBe(78);
  });
  test("blastoise.HP() returns value 79", () => {
    expect(blastoise.HP).toBe(79);
  });
});

describe("Attack getter tests", () => {
  test("pikachu.attack() returns value 55", () => {
    expect(pikachu.attack).toBe(55);
  });
  test("venusaur.attack() returns value 82", () => {
    expect(venusaur.attack).toBe(82);
  });
});

describe("Defense getter tests", () => {
  test("charizard.defense() returns value 78", () => {
    expect(charizard.defense).toBe(78);
  });
  test("blastoise.defense() returns value 100", () => {
    expect(blastoise.defense).toBe(100);
  });
});

describe("Speed getter tests", () => {
  test("pikachu.speed() returns value 90", () => {
    expect(pikachu.speed).toBe(90);
  });
  test("venusaur.speed() returns value 80", () => {
    expect(venusaur.speed).toBe(80);
  });
});

describe("showPokemonInfo method tests", () => {
  test("charizard.showPokemonInfo() returns '📜 Pokémon Info 📜\nNombre: Charizard\nTipo: fuego\nPeso: 905 kg\nAltura: 17.7 m\nHP: 78\nAtaque: 84\nDefensa: 78\nVelocidad: 100'", () => {
    expect(charizard.showPokemonInfo()).toBe(
      "📜 Pokémon Info 📜\nNombre: Charizard\nTipo: fuego\nPeso: 905 kg\nAltura: 17.7 m\nHP: 78\nAtaque: 84\nDefensa: 78\nVelocidad: 100\n",
    );
  });
  test("blastoise.showPokemonInfo() returns '📜 Pokémon Info 📜\nNombre: Blastoise\nTipo: agua\nPeso: 855 kg\nAltura: 16.9 m\nHP: 79\nAtaque: 83\nDefensa: 100\nVelocidad: 78'", () => {
    expect(blastoise.showPokemonInfo()).toBe(
      "📜 Pokémon Info 📜\nNombre: Blastoise\nTipo: agua\nPeso: 855 kg\nAltura: 16.9 m\nHP: 79\nAtaque: 83\nDefensa: 100\nVelocidad: 78\n",
    );
  });
});

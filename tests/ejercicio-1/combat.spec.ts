import { describe, expect, test } from "vitest";
import { Pokemon, PokemonType } from "../../src/ejercicio-1/pokemon";
import { Combat } from "../../src/ejercicio-1/combat";

const charizard = new Pokemon(
  "Charizard",
  905,
  17.7,
  PokemonType.Fire,
  200,
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

describe("Effectiveness test", () => {
  test("combat.Effectiveness(pikachu, charizard) returns 1", () => {
    const combat = new Combat(pikachu, charizard);
    expect(combat.Effectiveness(pikachu, charizard)).toBe(1);
  });

  test("combat.Effectiveness(pikachu, blastoise) returns 2", () => {
    const combat = new Combat(pikachu, blastoise);
    expect(combat.Effectiveness(pikachu, blastoise)).toBe(2);
  });

  test("combat.Effectiveness(pikachu, venusaur) returns 1", () => {
    const combat = new Combat(pikachu, venusaur);
    expect(combat.Effectiveness(pikachu, venusaur)).toBe(1);
  });

  test("combat.Effectiveness(charizard, venusaur) returns 2", () => {
    const combat = new Combat(charizard, venusaur);
    expect(combat.Effectiveness(charizard, venusaur)).toBe(2);
  });

  test("combat.Effectiveness(charizard, blastoise) returns 0.5", () => {
    const combat = new Combat(charizard, blastoise);
    expect(combat.Effectiveness(charizard, blastoise)).toBe(0.5);
  });

  test("combat.Effectiveness(charizard, pikachu) returns 1", () => {
    const combat = new Combat(charizard, pikachu);
    expect(combat.Effectiveness(charizard, pikachu)).toBe(1);
  });

  test("combat.Effectiveness(venusaur, charizard) returns 0.5", () => {
    const combat = new Combat(venusaur, charizard);
    expect(combat.Effectiveness(venusaur, charizard)).toBe(0.5);
  });

  test("combat.Effectiveness(venusaur, pikachu) returns 1", () => {
    const combat = new Combat(venusaur, pikachu);
    expect(combat.Effectiveness(venusaur, pikachu)).toBe(1);
  });

  test("combat.Effectiveness(venusaur, blastoise) returns 2", () => {
    const combat = new Combat(venusaur, blastoise);
    expect(combat.Effectiveness(venusaur, blastoise)).toBe(2);
  });

  test("combat.Effectiveness(blastoise, pikachu) returns 0.5", () => {
    const combat = new Combat(blastoise, pikachu);
    expect(combat.Effectiveness(blastoise, pikachu)).toBe(0.5);
  });

  test("combat.Effectiveness(blastoise, venusaur) returns 0.5", () => {
    const combat = new Combat(blastoise, venusaur);
    expect(combat.Effectiveness(blastoise, venusaur)).toBe(0.5);
  });

  test("combat.Effectiveness(blastoise, charizard) returns 2", () => {
    const combat = new Combat(blastoise, charizard);
    expect(combat.Effectiveness(blastoise, charizard)).toBe(2);
  });
});

describe("Start test", () => {
  test("combat.start() returns 'Combate entre Charizard y Blastoise\nCharizard tiene 200 HP\nBlastoise tiene 79 HP\nCharizard tiene 200 HP\nBlastoise tiene 58 HP\nCharizard tiene 94 HP\nBlastoise tiene 58 HP\nCharizard tiene 94 HP\nBlastoise tiene 37 HP\nCharizard tiene 0 HP\nBlastoise tiene 37 HP\nBlastoise ha ganado'", () => {
    const combat = new Combat(charizard, blastoise);
    expect(combat.start()).toBe(
      "Combate entre Charizard y Blastoise\nCharizard tiene 200 HP\nBlastoise tiene 79 HP\nCharizard tiene 200 HP\nBlastoise tiene 58 HP\nCharizard tiene 94 HP\nBlastoise tiene 58 HP\nCharizard tiene 94 HP\nBlastoise tiene 37 HP\nCharizard tiene 0 HP\nBlastoise tiene 37 HP\nBlastoise ha ganado",
    );
  });

  test("combat.start() returns 'Combate entre Pikachu y Venusaur\nPikachu tiene 35 HP\nVenusaur tiene 80 HP\nPikachu tiene 35 HP\nVenusaur tiene 47 HP\nPikachu tiene 0 HP\nVenusaur tiene 47 HP\nVenusaur ha ganado'", () => {
    const combat = new Combat(pikachu, venusaur);
    expect(combat.start()).toBe(
      "Combate entre Pikachu y Venusaur\nPikachu tiene 35 HP\nVenusaur tiene 80 HP\nPikachu tiene 35 HP\nVenusaur tiene 47 HP\nPikachu tiene 0 HP\nVenusaur tiene 47 HP\nVenusaur ha ganado",
    );
  });

  test("combat.start() returns 'Combate entre Charizard y Pikachu\nCharizard tiene 200 HP\nPikachu tiene 35 HP\nCharizard tiene 200 HP\nPikachu tiene 0 HP\nCharizard ha ganado'", () => {
    const combat = new Combat(charizard, pikachu);
    expect(combat.start()).toBe(
      "Combate entre Charizard y Pikachu\nCharizard tiene 200 HP\nPikachu tiene 35 HP\nCharizard tiene 200 HP\nPikachu tiene 0 HP\nCharizard ha ganado",
    );
  });
});

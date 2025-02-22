import { Pokemon, PokemonType } from "./pokemon";

/**
 * Class Combat that defines the combat between two Pokemons
 */
export class Combat {
  /**
   * Constructor of the class Combat
   * @param pokemon1 - The first Pokemon that combats
   * @param pokemon2 - The second Pokemon that combats
   */
  constructor(
    private pokemon1: Pokemon,
    private pokemon2: Pokemon,
  ) {}

  /**
   * This method returns the effectiveness of the attack of the attacker Pokemon against the defender Pokemon
   * @param pokemon_attacker - The attacker Pokemon
   * @param pokemon_defender - The defender Pokemon
   * @returns The effectiveness of the attack of the attacker Pokemon against the defender Pokemon as a number
   */
  public Effectiveness(
    pokemon_attacker: Pokemon,
    pokemon_defender: Pokemon,
  ): number {
    const effectiveness: { [key: string]: { [key: string]: number } } = {
      [PokemonType.Fire]: {
        [PokemonType.Electric]: 1,
        [PokemonType.Water]: 0.5,
        [PokemonType.Grass]: 2,
      },
      [PokemonType.Water]: {
        [PokemonType.Fire]: 2,
        [PokemonType.Electric]: 0.5,
        [PokemonType.Grass]: 0.5,
      },
      [PokemonType.Grass]: {
        [PokemonType.Fire]: 0.5,
        [PokemonType.Water]: 2,
        [PokemonType.Electric]: 1,
      },
      [PokemonType.Electric]: {
        [PokemonType.Fire]: 1,
        [PokemonType.Water]: 2,
        [PokemonType.Grass]: 1,
      },
    };
    return effectiveness[pokemon_attacker.type][pokemon_defender.type];
  }

  /**
   * This method starts the combat between the two Pokemons and shows both pokemons HP in every turn, finally shows the winner of the combat
   */
  public start(): string {
    let pokemon1_HP = this.pokemon1.HP;
    let pokemon2_HP = this.pokemon2.HP;
    let result = `Combate entre ${this.pokemon1.name} y ${this.pokemon2.name}\n`;
    let i = 0;
    while (pokemon1_HP > 0 && pokemon2_HP > 0) {
      result += `${this.pokemon1.name} tiene ${pokemon1_HP} HP\n`;
      result += `${this.pokemon2.name} tiene ${pokemon2_HP} HP\n`;
      if (i % 2 === 0) {
        const damage = Math.round(
          50 *
            (this.pokemon1.attack / this.pokemon2.defense) *
            this.Effectiveness(this.pokemon1, this.pokemon2),
        );
        pokemon2_HP = Math.max(pokemon2_HP - damage, 0);
      } else {
        const damage = Math.round(
          50 *
            (this.pokemon2.attack / this.pokemon1.defense) *
            this.Effectiveness(this.pokemon2, this.pokemon1),
        );
        pokemon1_HP = Math.max(pokemon1_HP - damage, 0);
      }
      ++i;
    }
    result += `${this.pokemon1.name} tiene ${pokemon1_HP} HP\n`;
    result += `${this.pokemon2.name} tiene ${pokemon2_HP} HP\n`;
    if (pokemon1_HP <= 0) {
      result += `${this.pokemon2.name} ha ganado`;
    } else {
      result += `${this.pokemon1.name} ha ganado`;
    }
    return result;
  }
}

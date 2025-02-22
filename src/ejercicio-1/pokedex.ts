import { Pokemon, PokemonType } from "./pokemon";

/**
 * Clase Pokedex that contains a list of pokemons
 */
export class Pokedex {
  /**
   * Constructor of the class Pokedex
   * @param pokemons - List of pokemons
   */
  constructor(public readonly pokemons: Pokemon[]) {}

  /**
   * This method adds a pokemon to the pokedex
   * @param pokemon - Pokemon to add to the pokedex
   */
  public addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  /**
   * This method removes a pokemon from the pokedex
   * @param pokemon - Pokemon to remove from the pokedex
   */
  public removePokemon(pokemon: Pokemon): void {
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i] === pokemon) {
        this.pokemons.splice(i, 1);
        break;
      }
    }
  }

  /**
   * This method shows all the info about pokemons in the pokedex
   * @returns A string with all the pokemons in the pokedex or undefined if there are no pokemons
   */
  public showAllPokemons(): string | undefined {
    if (this.pokemons.length === 0) return undefined;
    return this.pokemons.map((pokemon) => pokemon.showPokemonInfo()).join("\n");
  }

  /**
   * This method searches a pokemon by name
   * @param name - Name of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchByName(name: string): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.name === name)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }

  /**
   * This method searches a pokemon by type
   * @param type - Type of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchByType(type: PokemonType): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.type === type)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }

  /**
   * This method searches a pokemon by HP
   * @param hp - HP of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchByHP(hp: number): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.HP === hp)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }

  /**
   * This method searches a pokemon by height
   * @param height - Height of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchByHeight(height: number): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.height === height)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }

  /**
   * This method searches a pokemon by weight
   * @param weight - Weight of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchByWeight(weight: number): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.weight === weight)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }

  /**
   * This method searches a pokemon by attack
   * @param attack - Attack of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchByAttack(attack: number): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.attack === attack)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }

  /**
   * This method searches a pokemon by defense
   * @param defense - Defense of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchByDefense(defense: number): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.defense === defense)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }

  /**
   * This method searches a pokemon by speed
   * @param speed - Speed of the pokemon to search
   * @returns The info of pokemons or undefined if a pokemon is not found
   */
  public searchBySpeed(speed: number): string | undefined {
    const result = this.pokemons
      .filter((pokemon) => pokemon.speed === speed)
      .map((pokemon) => pokemon.showPokemonInfo())
      .join("\n");
    return result ? result : undefined;
  }
}
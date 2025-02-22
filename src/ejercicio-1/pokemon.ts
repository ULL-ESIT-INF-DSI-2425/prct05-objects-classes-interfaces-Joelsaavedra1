/**
 * Enum that defines the possibles types of the Pokemon
 */
export enum PokemonType {
  Fire = "fuego",
  Water = "agua",
  Grass = "hierba",
  Electric = "electrico",
}

/**
 * Interface that defines the stats of the Pokemon
 */
interface PokemonStats {
  HP: number;
  attack: number;
  defense: number;
  speed: number;
}

/**
 * Interface that defines the attributes of the Pokemon
 */
interface PokemonAttributes {
  name: string;
  weight: number;
  height: number;
  type: PokemonType;
}

/**
 * Class Pokemon that conteins the information of the Pokemon and implements the interfaces PokemonStats and PokemonAttributes
 */
export class Pokemon implements PokemonStats, PokemonAttributes {
  /**
   * Constructor of the class Pokemon
   * @param name - The name of the Pokemon
   * @param weight - The weight of the Pokemon
   * @param height - The height of the Pokemon
   * @param type - The type of the Pokemon
   * @param HP - The HP of the Pokemon
   * @param attack - The attack of the Pokemon
   * @param defense - The defense of the Pokemon
   * @param speed - The speed of the Pokemon
   */
  constructor(
    public readonly name: string,
    public readonly weight: number,
    public readonly height: number,
    public readonly type: PokemonType,
    public readonly HP: number,
    public readonly attack: number,
    public readonly defense: number,
    public readonly speed: number,
  ) {}

  /**
   * This method returns a string with the Pokemon's information
   * @returns string - Returns a string with the Pokemon's information
   */
  public showPokemonInfo(): string {
    return (
      `📜 Pokémon Info 📜\n` +
      `Nombre: ${this.name}\n` +
      `Tipo: ${this.type}\n` +
      `Peso: ${this.weight} kg\n` +
      `Altura: ${this.height} m\n` +
      `HP: ${this.HP}\n` +
      `Ataque: ${this.attack}\n` +
      `Defensa: ${this.defense}\n` +
      `Velocidad: ${this.speed}\n`
    );
  }
}

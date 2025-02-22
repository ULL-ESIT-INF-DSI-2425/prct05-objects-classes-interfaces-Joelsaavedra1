/**
 * Interface that defines the attributes of the song
 */
interface SongAttributes {
  name: string;
  duration: number;
  genre: string;
  single: boolean;
  number_of_plays: number;
}

/**
 * Class Song that contains the information of the song and implements the interface SongAttributes
 */
export class Song implements SongAttributes {
  /**
   * 
   * @param name - The name of the song
   * @param duration - The duration of the song
   * @param genre - The genre of the song
   * @param single - If the song is a single
   * @param number_of_plays - The number of plays of the song
   */
  constructor(
    public readonly name: string,
    public readonly duration: number,
    public readonly genre: string,
    public readonly single: boolean,
    public readonly number_of_plays: number,
  ) {}
}
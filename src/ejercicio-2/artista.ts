import { Record } from './disco';

/**
 * Interface that defines the attributes of an Artist
 */
interface ArtistAttributes {
  name: string;
  monthly_listeners: number;
  discography: Record[];
}

/**
 * Class that represents an Artist and implements the ArtistAttributes interface
 */
export class Artist implements ArtistAttributes {
  /**
   * Constructor of the class Artist
   * @param name - Name of the artist
   * @param monthly_listeners - Number of monthly listeners
   * @param discography - List of records
   * @param components - List of components(OPTIONAL)
   */
  constructor(
    public readonly name: string,
    public readonly monthly_listeners: number,
    public readonly discography: Record[],
    public readonly components?: string[],
  ) {}
}
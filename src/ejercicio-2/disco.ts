import { Song } from './cancion';

/**
 * Interface that defines the attributes of the record
 */
interface RecordAttributes {
  name: string;
  year: number;
  songs: Song[];
}

/**
 * Class Record that contains the information of the record and implements the interface RecordAttributes
 */
export class Record implements RecordAttributes {
  /**
   * Constructor of the class Record
   * @param name - The name of the record
   * @param year - The year of the record
   * @param songs - The songs of the record
   */
  constructor(
    public readonly name: string,
    public readonly year: number,
    public readonly songs: Song[],
  ) {}
}

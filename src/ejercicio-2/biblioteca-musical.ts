import { Artist } from "./artista";

/**
 * Interface that defines the attributes of the musical library
 */
interface MusicalLibraryAttributes {
  artists: Artist[];
}

/**
 * Class MusicalLibrary that contains the information of the musical library(artists, records and songs) and implements the interface MusicalLibraryAttributes
 */
export class MusicalLibrary implements MusicalLibraryAttributes {
  /**
   * Constructor of the class MusicalLibrary
   * @param artists - The artists of the musical library
   */
  constructor(public readonly artists: Artist[]) {}

  /**
   * This method adds an artist to the library
   * @param artist - The artist to add to the library
   */
  public addArtist(artist: Artist): boolean {
    if (!this.artists.find((a) => a.name === artist.name)) {
      this.artists.push(artist);
      return true;
    }
    return false;
  }

  /**
   * This method show the artists in the library and their information
   * @returns The table with the artists in the library or undefined if there are no artists
   */
  public showLibrary(): string | undefined {
    if (this.artists.length === 0) return undefined;
    console.table(
      this.artists.map((artist) => ({
        Name: artist.name,
        "Monthly Listeners": artist.monthly_listeners,
        "Number of Records": artist.discography.length,
        Components: artist.components
          ? artist.components.join(", ")
          : artist.name,
      })),
    );
    return "La tabla se ha mostrado correctamente";
  }

  /**
   * This method search an artist in the library and show the information of the artist
   * @param name - The name of the artist to search
   * @returns The table with the artist information or undefined if the artist is not found
   */
  public searchArtist(name: string): string | undefined {
    const artist = this.artists.find(
      (artist) => artist.name.toLowerCase() === name.toLowerCase(),
    );
    if (artist) {
      if (artist.components) {
        console.table([
          {
            Name: artist.name,
            "Monthly Listeners": artist.monthly_listeners,
            Records: artist.discography.map((record) => record.name).join(", "),
            Components: artist.components.join(", "),
          },
        ]);
      } else {
        console.table([
          {
            Name: artist.name,
            "Monthly Listeners": artist.monthly_listeners,
            Records: artist.discography.map((record) => record.name).join(", "),
          },
        ]);
      }
      return "La tabla se ha mostrado correctamente";
    } else {
      return undefined;
    }
  }

  /**
   * This method search a record in the library and show the information of the record
   * @param name - The name of the record to search
   * @returns The table with the record information or undefined if the record is not found
   */
  public searchRecord(name: string): string | undefined {
    let found = false;
    for (const artist of this.artists) {
      const record = artist.discography.find(
        (record) => record.name.toLowerCase() === name.toLowerCase(),
      );
      if (record) {
        console.table([
          {
            Artist: artist.name,
            Name: record.name,
            Year: record.year,
            Songs: record.songs.map((song) => song.name).join(", "),
          },
        ]);
        found = true;
      }
    }
    if (found) return "La tabla se ha mostrado correctamente";
    return undefined;
  }

  /**
   * This method search a song in the library and show the information of the song
   * @param name - The name of the song to search
   * @returns The table with the song information or undefined if the song is not found
   */
  public searchSong(name: string): string | undefined {
    let found = false;
    for (const artist of this.artists) {
      for (const record of artist.discography) {
        const song = record.songs.find(
          (song) => song.name.toLowerCase() === name.toLowerCase(),
        );
        if (song) {
          console.table([
            {
              Artist: artist.name,
              Record: record.name,
              Name: song.name,
              Duration: song.duration,
              Genre: song.genre,
              Single: song.single,
              NumberOfPlays: song.number_of_plays,
            },
          ]);
          found = true;
        }
      }
    }
    if (found) return "La tabla se ha mostrado correctamente";
    return undefined;
  }

  /**
   * This method returns the number of songs in a record
   * @param recordName - The name of the record to search
   * @returns The number of songs in the record or undefined if the record is not found
   */
  public numOfSongs(recordName: string): number | undefined {
    for (const artist of this.artists) {
      const record = artist.discography.find(
        (record) => record.name.toLowerCase() === recordName.toLowerCase(),
      );
      if (record) {
        return record.songs.length;
      }
    }
    return undefined;
  }

  /**
   * This method returns the duration of a record
   * @param recordName - The name of the record to search
   * @returns The duration of the record or undefined if the record is not found
   */
  public durationOfRecord(recordName: string): number | undefined {
    for (const artist of this.artists) {
      const record = artist.discography.find(
        (record) => record.name.toLowerCase() === recordName.toLowerCase(),
      );
      if (record) {
        return record.songs.reduce((acc, song) => acc + song.duration, 0);
      }
    }
    return undefined;
  }

  /**
   * This method returns the number of plays of a record
   * @param recordName - The name of the record to search
   * @returns The number of plays of the record or undefined if the record is not found
   */
  public playsOfRecord(recordName: string): number | undefined {
    for (const artist of this.artists) {
      const record = artist.discography.find(
        (record) => record.name.toLowerCase() === recordName.toLowerCase(),
      );
      if (record) {
        return record.songs.reduce(
          (acc, song) => acc + song.number_of_plays,
          0,
        );
      }
    }
    return undefined;
  }
}

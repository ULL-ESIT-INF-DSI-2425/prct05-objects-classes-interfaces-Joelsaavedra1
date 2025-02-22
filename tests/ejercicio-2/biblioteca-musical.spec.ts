import { describe, expect, test } from "vitest";
import { Song } from "../../src/ejercicio-2/cancion";
import { MusicalLibrary } from "../../src/ejercicio-2/biblioteca-musical";
import { Artist } from "../../src/ejercicio-2/artista";
import { Record } from "../../src/ejercicio-2/disco";

const song1 = new Song("breed", 183, "grunge", false, 1000037);
const song2 = new Song("lithium", 257, "grunge", false, 2000050);
const song3 = new Song("thriller", 258, "pop", true, 3000089);
const song4 = new Song("billie jean", 294, "pop", true, 4000000);
const song5 = new Song("digale", 258, "pop", true, 5000000);
const song6 = new Song("buleria", 294, "pop", true, 6000000);

const record1 = new Record("nevermind", 1991, [song1, song2]);
const record2 = new Record("thriller", 1982, [song3, song4]);
const record3 = new Record("corazon latino", 2002, [song5]);
const record4 = new Record("buleria", 2004, [song6]);

const artist1 = new Artist("nirvana", 5056600, [record1], ["kurt cobain", "krist novoselic"]);
const artist2 = new Artist("michael jackson", 10056600, [record2]);
const artist3 = new Artist("david bisbal", 656600, [record3, record4]);

const library = new MusicalLibrary([artist1, artist2]);

describe("Add artist test", () => {
  test("library.addArtist(artist3) returns true", () => {
    expect(library.artists.length).toBe(2);
    expect(library.artists).not.toContain(artist3);
    expect(library.addArtist(artist3)).toBe(true);
    expect(library.artists.length).toBe(3);
    expect(library.artists).toContain(artist3);
  });

  test("library.addArtist(artist3) returns false", () => {
    expect(library.addArtist(artist3)).toBe(false);
  });
});

describe("Show library test", () => {
  test("library.showLibrary() returns 'La tabla se ha mostrado correctamente'", () => {
    expect(library.showLibrary()).toBe("La tabla se ha mostrado correctamente");
  });

  test("library.showLibrary() returns undefined", () => {
    const library2 = new MusicalLibrary([]);
    expect(library2.showLibrary()).toBeUndefined();
  });
});

describe("Search artist test", () => {
  test("library.searchArtist('nirvana') returns 'La tabla se ha mostrado correctamente'", () => {
    expect(library.searchArtist("nirvana")).toBe(
      "La tabla se ha mostrado correctamente",
    );
  });

  test("library.searchArtist('michael jackson') returns 'La tabla se ha mostrado correctamente'", () => {
    expect(library.searchArtist("michael jackson")).toBe(
      "La tabla se ha mostrado correctamente",
    );
  });

  test("library.searchArtist('melendi') returns undefined", () => {
    expect(library.searchArtist("melendi")).toBeUndefined();
  });
});

describe("Search record test", () => {
  test("library.searchRecord('nevermind') returns 'La tabla se ha mostrado correctamente'", () => {
    expect(library.searchRecord("nevermind")).toBe(
      "La tabla se ha mostrado correctamente",
    );
  });
  test("library.searchRecord('corazon latino') returns 'La tabla se ha mostrado correctamente'", () => {
    expect(library.searchRecord("corazon latino")).toBe(
      "La tabla se ha mostrado correctamente",
    );
  });

  test("library.searchRecord('corazon') returns undefined", () => {
    expect(library.searchRecord("corazon")).toBeUndefined();
  });
});

describe("Search song test", () => {
  test("library.searchSong('breed') returns 'La tabla se ha mostrado correctamente'", () => {
    expect(library.searchSong("breed")).toBe(
      "La tabla se ha mostrado correctamente",
    );
  });

  test("library.searchSong('lithium') returns 'La tabla se ha mostrado correctamente'", () => {
    expect(library.searchSong("lithium")).toBe(
      "La tabla se ha mostrado correctamente",
    );
  });

  test("library.searchSong('la macarena') returns undefined", () => {
    expect(library.searchSong("la macarena")).toBeUndefined();
  });
});

describe("Number of songs test", () => {
  test("library.numberOfSongs() returns 2", () => {
    expect(library.numOfSongs("nevermind")).toBe(2);
  });

  test("library.numberOfSongs() returns 1", () => {
    expect(library.numOfSongs("buleria")).toBe(1);
  });

  test("library.numberOfSongs() returns undefined", () => {
    expect(library.numOfSongs("corazon")).toBeUndefined();
  });
});

describe("Duration of record test", () => {
  test("library.durationOfRecord() returns 440", () => {
    expect(library.durationOfRecord("nevermind")).toBe(440);
  });

  test("library.durationOfRecord() returns 258", () => {
    expect(library.durationOfRecord("corazon latino")).toBe(258);
  });

  test("library.durationOfRecord() returns undefined", () => {
    expect(library.durationOfRecord("corazon")).toBeUndefined();
  });
});

describe("Number of plays of record test", () => {
  test("library.playsOfRecord() returns 1000037", () => {
    expect(library.playsOfRecord("nevermind")).toBe(3000087);
  });

  test("library.playsOfRecord() returns 6000000", () => {
    expect(library.playsOfRecord("buleria")).toBe(6000000);
  });

  test("library.playsOfRecord() returns undefined", () => {
    expect(library.playsOfRecord("corazon")).toBeUndefined();
  });
});

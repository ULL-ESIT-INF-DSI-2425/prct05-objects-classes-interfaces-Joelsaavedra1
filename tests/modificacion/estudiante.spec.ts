import { describe, expect, test } from "vitest";
import { Student } from "../../src/modificacion/estudiante";

const estudiante1 = new Student(
  "Joel",
  "Saavedra Páez",
  "05-10-2002",
  12345678,
  "American",
  "alu01011241@gmail.com",
  "ULPG",
  1,
);

const estudiante2 = new Student(
  "Huea",
  "Doe",
  "01/01/1970",
  12345678,
  "American",
  "alu010134114@gmail.com",
  "ULL",
  4,
);

describe("showTeacher test", () => {
  test("showPersonInfo() returns 'Name: Joel, Surname: Saavedra Páez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: American, Institutional Email: alu01011241@gmail.com, University: ULPG, Course: 1'", () => {
    expect(estudiante1.showPersonInfo()).toBe(
      "Name: Joel, Surname: Saavedra Páez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: American, Institutional Email: alu01011241@gmail.com, University: ULPG, Course: 1",
    );
  });

  test("showPersonInfo() returns 'Name: Huea, Surname: Doe, Birthdate: 01/01/1970, DNI: 12345678, Nationality: American, Institutional Email: alu010134114@gmail.com, University: ULL, Course: 4'", () => {
    expect(estudiante2.showPersonInfo()).toBe(
      "Name: Huea, Surname: Doe, Birthdate: 01/01/1970, DNI: 12345678, Nationality: American, Institutional Email: alu010134114@gmail.com, University: ULL, Course: 4",
    );
  });
});

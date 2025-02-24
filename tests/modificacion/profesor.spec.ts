import { describe, expect, test } from "vitest";
import { Teacher } from "../../src/modificacion/profesor";

const teacher1 = new Teacher(
  "Ana",
  "Perez",
  "05-10-2002",
  12345678,
  "Español",
  "alu0101437415@ull.edu.com",
  "Monday 10:00-12:00",
  "Matematicas",
);

const teacher2 = new Teacher(
  "Pepe",
  "Rodriguez",
  "01/01/1970",
  12345678,
  "Español",
  "xxx@gmail.com",
  "Monday 10:00-12:00",
  "Matematicas",
);

describe("showTeacher test", () => {
  test("showPersonInfo() returns 'Name: Ana, Surname: Perez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: Español, Institutional Email: alu0101437415@ull.edu.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas'", () => {
    expect(teacher1.showPersonInfo()).toBe(
      "Name: Ana, Surname: Perez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: Español, Institutional Email: alu0101437415@ull.edu.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas",
    );
  });

  test("showPersonInfo() returns 'Name: Pepe, Surname: Rodriguez, Birthdate: 01/01/1970, DNI: 12345678, Nationality: Español, Email: xxx@gmail.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas'", () => {
    expect(teacher2.showPersonInfo()).toBe(
      "Name: Pepe, Surname: Rodriguez, Birthdate: 01/01/1970, DNI: 12345678, Nationality: Español, Institutional Email: xxx@gmail.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas",
    );
  });
});

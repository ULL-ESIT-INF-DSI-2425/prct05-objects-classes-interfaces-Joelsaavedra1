import { describe, expect, test } from "vitest";
import { Subject } from "../../src/modificacion/asignatura";
import { Teacher } from "../../src/modificacion/profesor";
import { Student } from "../../src/modificacion/estudiante";

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

const asignatura = new Subject(
  "001",
  "Math",
  "Computer Science",
  [teacher1, teacher2],
  [
    { student: estudiante1, mark: 9 },
    { student: estudiante2, mark: 10 },
  ],
);

describe("showTeacher test", () => {
  test("showTeacher() returns 'Name: Ana, Surname: Perez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: Español, Institutional Email: alu0101437415@ull.edu.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas\nName: Pepe, Surname: Rodriguez, Birthdate: 01/01/1970, DNI: 12345678, Nationality: Español, Email: xxx@gmail.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas'", () => {
    expect(asignatura.showTeachers()).toBe(
      "Name: Ana, Surname: Perez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: Español, Institutional Email: alu0101437415@ull.edu.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas\nName: Pepe, Surname: Rodriguez, Birthdate: 01/01/1970, DNI: 12345678, Nationality: Español, Institutional Email: xxx@gmail.com, Tutorship Schedule: Monday 10:00-12:00, Department: Matematicas",
    );
  });
});

describe("showStudents test", () => {
  test("showStudents() returns 'Name: Joel, Surname: Saavedra Páez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: American, Institutional Email: alu01011241@gmail.com, University: ULPG, Course: 1\nName: Huea, Surname: Doe, Birthdate: 01/01/1970, DNI: 12345678, Nationality: American, Institutional Email: alu010134114@gmail.com, University: ULL, Course: 4'", () => {
    expect(asignatura.showStudents()).toBe(
      "Name: Joel, Surname: Saavedra Páez, Birthdate: 05-10-2002, DNI: 12345678, Nationality: American, Institutional Email: alu01011241@gmail.com, University: ULPG, Course: 1\nName: Huea, Surname: Doe, Birthdate: 01/01/1970, DNI: 12345678, Nationality: American, Institutional Email: alu010134114@gmail.com, University: ULL, Course: 4",
    );
  });
});

describe("searchTeacherByNameOrEmail test", () => {
  test("searchTeacherByNameOrEmail('Ana') returns Theacher Ana", () => {
    expect(asignatura.searchTeacherByNameOrEmail("Ana")).toStrictEqual(
      teacher1,
    );
  });
  test("searchTeacherByNameOrEmail('Pepe') returns Theacher Pepe", () => {
    expect(asignatura.searchTeacherByNameOrEmail("Pepe")).toStrictEqual(
      teacher2,
    );
  });
  test("searchTeacherByNameOrEmail('Juan') returns undefined", () => {
    expect(asignatura.searchTeacherByNameOrEmail("Juan")).toBeUndefined();
  });
});

describe("searchStudentByNameOrEmail test", () => {
  test("searchStudentByNameOrEmail('Joel') returns Student Joel", () => {
    expect(asignatura.searchStudentByNameOrEmail("Joel")).toStrictEqual(
      estudiante1,
    );
  });
  test("searchStudentByNameOrEmail('Huea') returns Student Huea", () => {
    expect(asignatura.searchStudentByNameOrEmail("Huea")).toStrictEqual(
      estudiante2,
    );
  });
  test("searchStudentByNameOrEmail('Pepe') returns undefined", () => {
    expect(asignatura.searchStudentByNameOrEmail("Pepe")).toBeUndefined();
  });
});

describe("searchStudentByMark test", () => {
  test("searchStudentByMark(9) returns Student Joel", () => {
    expect(asignatura.serchStudentsByMark(9)).toStrictEqual([estudiante1]);
  });
  test("searchStudentByMark(10) returns Student Huea", () => {
    expect(asignatura.serchStudentsByMark(10)).toStrictEqual([estudiante2]);
  });
  test("searchStudentByMark(5) returns []", () => {
    expect(asignatura.serchStudentsByMark(5)).toStrictEqual([]);
  });
});

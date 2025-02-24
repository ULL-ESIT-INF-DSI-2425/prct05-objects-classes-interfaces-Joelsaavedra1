import { Person } from "./persona";

/**
 * Class that represents a student and extends from Person
 */
export class Student extends Person {
  /**
   * Constructor of the Student class
   * @param _name - Name of the student
   * @param _surname - Surname of the student
   * @param _birthdate - Birthdate of the student
   * @param _DNI - DNI of the student
   * @param _nationality - Nationality of the student
   * @param _institutionalEmail - Institutional email of the student
   * @param _university - University of the student
   * @param _course - Course of the student
   */
  constructor(
    _name: string,
    _surname: string,
    _birthdate: string,
    _DNI: number,
    _nationality: string,
    private _institutionalEmail: string,
    private _university: string,
    private _course: number,
  ) {
    super(_name, _surname, _birthdate, _DNI, _nationality);
  }
  /**
   * Getter that returns the institutional email of the student
   */
  get institutionalEmail(): string {
    return this._institutionalEmail;
  }
  /**
   * Getter that returns the university of the student
   */
  get university(): string {
    return this._university;
  }
  /**
   * Getter that returns the course of the student
   */
  get course(): number {
    return this._course;
  }
  /**
   * Setter that changes the institutional email of the student
   * @param institutionalEmail - New institutional email of the student
   */
  set institutionalEmail(institutionalEmail: string) {
    this._institutionalEmail = institutionalEmail;
  }
  /**
   * Setter that changes the university of the student
   * @param university - New university of the student
   */
  set university(university: string) {
    this._university = university;
  }
  /**
   * Setter that changes the course of the student
   * @param course - New course of the student
   */
  set course(course: number) {
    this._course = course;
  }
  /**
   * Method that returns the information of the student
   * @returns Information of the student
   */
  showPersonInfo(): string {
    return `Name: ${this.name}, Surname: ${this.surname}, Birthdate: ${this.birthdate}, DNI: ${this.DNI}, Nationality: ${this.nationality}, Institutional Email: ${this._institutionalEmail}, University: ${this._university}, Course: ${this._course}`;
  }
}
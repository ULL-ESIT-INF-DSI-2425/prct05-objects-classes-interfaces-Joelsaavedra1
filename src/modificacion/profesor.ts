import { Person } from "./persona";

/**
 * Class that represents a teacher and extends from Person
 */
export class Teacher extends Person {
  /**
   *
   * @param _name - Name of the teacher
   * @param _surname - Surname of the teacher
   * @param _birthdate - Birthdate of the teacher
   * @param _DNI - DNI of the teacher
   * @param _nationality - Nationality of the teacher
   * @param _institutionalEmail - Institutional email of the teacher
   * @param _tutorshipSchedule - Tutorship schedule of the teacher
   * @param _department - Department of the teacher
   */
  constructor(
    _name: string,
    _surname: string,
    _birthdate: string,
    _DNI: number,
    _nationality: string,
    private _institutionalEmail: string,
    private _tutorshipSchedule: string,
    private _department: string,
  ) {
    super(_name, _surname, _birthdate, _DNI, _nationality);
  }
  /**
   * Getter that returns the institutional email of the teacher
   */
  get institutionalEmail(): string {
    return this._institutionalEmail;
  }
  /**
   * Getter that returns the tutorship schedule of the
   */
  get tutorshipSchedule(): string {
    return this._tutorshipSchedule;
  }
  /**
   * Getter that returns the department of the teacher
   */
  get department(): string {
    return this._department;
  }
  /**
   * Setter that changes the institutional email of the teacher
   * @param institutionalEmail - New institutional email of the teacher
   */
  set institutionalEmail(institutionalEmail: string) {
    this._institutionalEmail = institutionalEmail;
  }
  /**
   * Setter that changes the tutorship schedule of the teacher
   * @param tutorshipSchedule - New tutorship schedule of the teacher
   */
  set tutorshipSchedule(tutorshipSchedule: string) {
    this._tutorshipSchedule = tutorshipSchedule;
  }
  /**
   * Setter that changes the department of the teacher
   * @param department - New department of the teacher
   */
  set department(department: string) {
    this._department = department;
  }
  /**
   * Method that returns the information of the teacher
   * @returns Information of the teacher
   */
  showPersonInfo(): string {
    return `Name: ${this.name}, Surname: ${this.surname}, Birthdate: ${this.birthdate}, DNI: ${this.DNI}, Nationality: ${this.nationality}, Institutional Email: ${this._institutionalEmail}, Tutorship Schedule: ${this._tutorshipSchedule}, Department: ${this._department}`;
  }
}

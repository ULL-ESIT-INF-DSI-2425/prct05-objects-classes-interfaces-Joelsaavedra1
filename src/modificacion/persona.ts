/**
 * Class abstract Person that defines the attributes of a person
 */
export abstract class Person {
  /**
   * Constructor of the Person class
   * @param _name - Name of the person
   * @param _surname - Surname of the person
   * @param _birthdate - Birthdate of the person
   * @param _DNI - DNI of the person
   * @param _nationality - Nationality of the person
   */
  constructor(
    private _name: string,
    private _surname: string,
    private _birthdate: string,
    private _DNI: number,
    private _nationality: string,
  ) {}
  /**
   * Getter that returns the name of the person
   */
  get name(): string {
    return this._name;
  }
  /**
   * Getter that returns the surname of the person
   */
  get surname(): string {
    return this._surname;
  }
  /**
   * Getter that returns the birthdate of the person
   */
  get birthdate(): string {
    return this._birthdate;
  }
  /**
   * Getter that returns the DNI of the person
   */
  get DNI(): number {
    return this._DNI;
  }
  /**
   * Getter that returns the nationality of the person
   */
  get nationality(): string {
    return this._nationality;
  }
  /**
   * Setter that changes the name of the person
   * @param name - New name of the person
   */
  set name(name: string) {
    this._name = name;
  }
  /**
   * Setter that changes the surname of the person
   * @param surname - New surname of the person
   */
  set surname(surname: string) {
    this._surname = surname;
  }
  /**
   * Setter that changes the birthdate of the person
   * @param birthdate - New birthdate of the person
   */
  set birthdate(birthdate: string) {
    this._birthdate = birthdate;
  }
  /**
   * Setter that changes the DNI of the person
   * @param DNI - New DNI of the person
   */
  set DNI(DNI: number) {
    this._DNI = DNI;
  }
  /**
   * Setter that changes the nationality of the person
   * @param nationality - New nationality of the person
   */
  set nationality(nationality: string) {
    this._nationality = nationality;
  }
  /**
   * Abstract method that shows the information of the person
   */
  abstract showPersonInfo(): string;
}

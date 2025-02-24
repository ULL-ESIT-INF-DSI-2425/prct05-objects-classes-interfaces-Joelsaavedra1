import { Student } from "./estudiante";
import { Teacher } from "./profesor";

/**
 * Type to represent a student and its mark
 */
type StudentMark = {
  student: Student;
  mark: number;
};

/**
 * Class to represent a subject
 */
export class Subject {
  /**
   *
   * @param _code - Code of the subjext
   * @param _name - Name of the subject
   * @param _degree - Degree of the subject
   * @param _teachers - Teachers that impart the subject
   * @param _students - Students in the subject and their marks
   */
  constructor(
    private _code: string,
    private _name: string,
    private _degree: string,
    private _teachers: Teacher[],
    private _students: StudentMark[],
  ) {}
  /**
   * Getter that returns the code of the subject
   */
  get code(): string {
    return this.code;
  }
  /**
   * Getter that returns the name of the subject
   */
  get name(): string {
    return this.name;
  }
  /**
   * Getter that returns the degree of the subject
   */
  get degree(): string {
    return this._degree;
  }
  /**
   * Getter that returns the teachers of the subject
   */
  get teachers(): Teacher[] {
    return this._teachers;
  }
  /**
   * Getter that returns the students of the subject
   */
  get students(): StudentMark[] {
    return this._students;
  }
  /**
   * Setter that changes the code of the subject
   * @param code - New code of the subject
   */
  set code(code: string) {
    this._code = code;
  }
  /**
   * Setter that changes the name of the subject
   * @param name - New name of the subject
   */
  set name(name: string) {
    this._name = name;
  }
  /**
   * Setter that changes the degree of the subject
   * @param degree - New degree of the subject
   */
  set degree(degree: string) {
    this._degree = degree;
  }
  /**
   * Setter that changes the teachers of the subject
   * @param teachers - New teachers of the subject
   */
  set teachers(teachers: Teacher[]) {
    this._teachers = teachers;
  }
  /**
   * Setter that changes the students of the subject
   * @param students - New students of the subject
   */
  set students(students: StudentMark[]) {
    this._students = students;
  }
  /**
   * Method that shows the information of the teachers
   * @returns Information of the teachers
   */
  showTeachers(): string {
    return this._teachers.map((teacher) => teacher.showPersonInfo()).join("\n");
  }
  /**
   * Method that shows the information of the students
   * @returns Information of the students
   */
  showStudents(): string {
    return this._students
      .map((student) => student.student.showPersonInfo())
      .join("\n");
  }
  /**
   * Method that searches a teacher by name or email
   * @param nameOrEmail - Name or email of the teacher
   * @returns Teacher found or undefined if not found
   */
  searchTeacherByNameOrEmail(nameOrEmail: string): Teacher | undefined {
    return this.teachers.find(
      (teacher) =>
        teacher.name === nameOrEmail ||
        teacher.institutionalEmail === nameOrEmail,
    );
  }
  /**
   * Method that searches a student by name or email
   * @param nameOrEmail - Name or email of the student
   * @returns Student found or undefined if not found
   */
  searchStudentByNameOrEmail(nameOrEmail: string): Student | undefined {
    return this.students.find(
      (student) =>
        student.student.name === nameOrEmail ||
        student.student.institutionalEmail === nameOrEmail,
    )?.student;
  }
  /**
   * Method that searches students by mark
   * @param mark - Mark of the students
   * @returns Students with the mark
   */
  serchStudentsByMark(mark: number): Student[] {
    const students: Student[] = [];
    this.students.forEach((student) => {
      if (student.mark === mark) {
        students.push(student.student);
      }
    });
    return students;
  }
}
import { Student } from "../entities/Student";
import { ValidStudentMock } from "./valid-student";

export const ValidStudentsMock: Student[] = [
  ValidStudentMock,
  {...ValidStudentMock, id: 'richard-id', firstName: 'Richard', lastName: 'Doe'},
];
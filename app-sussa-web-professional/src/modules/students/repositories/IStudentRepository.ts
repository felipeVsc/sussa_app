/* eslint-disable no-unused-vars */
import { Student } from '../entities/Student';

export interface IStudentRepository {
  findById(id: string): Promise<Student | undefined>;
}

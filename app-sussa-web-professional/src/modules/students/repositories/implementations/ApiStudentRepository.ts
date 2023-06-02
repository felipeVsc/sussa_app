/* eslint-disable no-unused-vars */
import { Student } from '../../entities/Student';
import { IStudentRepository } from '../IStudentRepository';

export class ApiStudentRepository implements IStudentRepository {
  public async findById(id: string): Promise<Student | undefined> {
    throw new Error('Method not implemented.');
  }
}

/* eslint-disable no-unused-vars */
import { Student } from '../../entities/Student';
import { ValidStudentsMock } from '../../mocks/valid-students';
import { IStudentRepository } from '../IStudentRepository';

export class MockStudentRepository implements IStudentRepository {
  public async findById(id: string): Promise<Student | undefined> {
    return ValidStudentsMock.find(student => student.id === id);
  }
}

/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../../presentation/context/authentication/props';
import { IAuthenticateStudentDTO } from '../../dtos/IAuthenticateStudentDTO';
import { ICreateStudentDTO } from '../../dtos/ICreateStudentDTO';
import { Student } from '../../entities/Student';
import { ValidStudentMock } from '../../mocks/valid-student';
import { IStudentRepository } from '../IStudentRepository';

export class MockStudentRepository implements IStudentRepository {
  public async authenticate(params: IAuthenticateStudentDTO): Promise<IProfileMetadata> {
    return {
      student: ValidStudentMock,
    };
  }

  public async create(student: ICreateStudentDTO): Promise<Student> {
    return ValidStudentMock;
  }
}

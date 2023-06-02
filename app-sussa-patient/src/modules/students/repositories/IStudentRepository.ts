/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../presentation/context/authentication/props';
import { ICreateStudentDTO } from '../dtos/ICreateStudentDTO';
import { IAuthenticateStudentDTO } from '../dtos/IAuthenticateStudentDTO';
import { Student } from '../entities/Student';

export interface IStudentRepository {
  create(student: ICreateStudentDTO): Promise<Student>;
  authenticate(params: IAuthenticateStudentDTO): Promise<IProfileMetadata>;
}

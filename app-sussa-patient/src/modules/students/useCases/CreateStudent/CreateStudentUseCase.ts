/* eslint-disable no-unused-vars */
import { ICreateStudentDTO } from '../../dtos/ICreateStudentDTO';
import { Student } from '../../entities/Student';
import { IStudentRepository } from '../../repositories/IStudentRepository';

export class CreateStudentUseCase {
  constructor(
    private repository: IStudentRepository,
  ) {}

  public async execute(params: ICreateStudentDTO): Promise<Student> {
    return this.repository.create(params);
  }
}

/* eslint-disable no-unused-vars */
import { Student } from '../../entities/Student';
import { IStudentRepository } from '../../repositories/IStudentRepository';

export class FindStudentByIdUseCase {
  constructor(
    private repository: IStudentRepository,
  ) {}

  public async execute(id: string): Promise<Student | undefined> {
    return this.repository.findById(id);
  }
}

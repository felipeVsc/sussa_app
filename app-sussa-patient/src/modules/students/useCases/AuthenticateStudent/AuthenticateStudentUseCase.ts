/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../../presentation/context/authentication/props';
import { IAuthenticateStudentDTO } from '../../dtos/IAuthenticateStudentDTO';
import { IStudentRepository } from '../../repositories/IStudentRepository';

export class AuthenticateStudentUseCase {
  constructor(
    private repository: IStudentRepository,
  ) {}

  public async execute(params: IAuthenticateStudentDTO): Promise<IProfileMetadata> {
    return this.repository.authenticate(params);
  }
}

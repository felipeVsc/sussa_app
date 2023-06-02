/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../../presentation/context/authentication/props';
import { IAuthenticateProfessionalDTO } from '../../dtos/IAuthenticateProfessionalDTO';
import { IProfessionalRepository } from '../../repositories/IProfessionalRepository';

export class AuthenticateProfessionalUseCase {
  constructor(
    private repository: IProfessionalRepository,
  ) {}

  public async execute(params: IAuthenticateProfessionalDTO): Promise<IProfileMetadata> {
    return this.repository.authenticate(params);
  }
}

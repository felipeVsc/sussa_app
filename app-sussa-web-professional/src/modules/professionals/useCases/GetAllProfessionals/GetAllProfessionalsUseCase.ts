/* eslint-disable no-unused-vars */
import { Professional } from '../../entities/Professional';
import { IProfessionalRepository } from '../../repositories/IProfessionalRepository';

export class GetAllProfessionalsUseCase {
  constructor(
    private repository: IProfessionalRepository,
  ) {}

  public async execute(): Promise<Professional[]> {
    return this.repository.index();
  }
}

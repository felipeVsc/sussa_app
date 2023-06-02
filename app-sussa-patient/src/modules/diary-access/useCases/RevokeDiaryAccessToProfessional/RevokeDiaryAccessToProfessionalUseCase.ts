/* eslint-disable no-unused-vars */
import { IRevokeDiaryAccessToProfessionalDTO } from '../../dtos/IRevokeDiaryAccessToProfessionalDTO';
import { IDiaryAccessesRepository } from '../../repositories/IDiaryAccessesRepository';

export class RevokeDiaryAccessToProfessionalUseCase {
  constructor(
    private repository: IDiaryAccessesRepository,
  ) {}

  public async execute(
    params: IRevokeDiaryAccessToProfessionalDTO,
  ): Promise<void> {
    return this.repository.revokeAccessToProfessional(params);
  }
}

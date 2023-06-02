import { IGiveDiaryAccessToProfessionalDTO } from "../../dtos/IGiveDiaryAccessToProfessionalDTO";
import { IDiaryAccessesRepository } from "../../repositories/IDiaryAccessesRepository";

/* eslint-disable no-unused-vars */
export class GiveDiaryAccessToProfessionalUseCase {
  constructor(
    private repository: IDiaryAccessesRepository,
  ) {}

  public async execute(
    params: IGiveDiaryAccessToProfessionalDTO
  ): Promise<void> {
    return this.repository.giveAccessToProfessional(params);
  }
}

import { ICheckDiaryAccessPermissionDTO } from "../../dtos/ICheckDiaryAcessPermissionDTO";
import { IDiaryAccessesRepository } from "../../repositories/IDiaryAccessesRepository";

/* eslint-disable no-unused-vars */
export class CheckExistingDiaryAccessPermissionUseCase {
  constructor(
    private repository: IDiaryAccessesRepository,
  ) {}

  public async execute(
    params: ICheckDiaryAccessPermissionDTO    
  ): Promise<boolean> {
    return this.repository.checkDiaryAccessPermission(params);
  }
}

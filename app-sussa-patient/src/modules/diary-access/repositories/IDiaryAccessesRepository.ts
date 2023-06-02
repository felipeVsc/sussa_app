import { ICheckDiaryAccessPermissionDTO } from "../dtos/ICheckDiaryAcessPermissionDTO";
import { IGiveDiaryAccessToProfessionalDTO } from "../dtos/IGiveDiaryAccessToProfessionalDTO";
import { IRevokeDiaryAccessToProfessionalDTO } from "../dtos/IRevokeDiaryAccessToProfessionalDTO";

/* eslint-disable no-unused-vars */
export interface IDiaryAccessesRepository {
  giveAccessToProfessional(params: IGiveDiaryAccessToProfessionalDTO): Promise<void>;
  revokeAccessToProfessional(params: IRevokeDiaryAccessToProfessionalDTO): Promise<void>;
  checkDiaryAccessPermission(params: ICheckDiaryAccessPermissionDTO): Promise<boolean>;
}

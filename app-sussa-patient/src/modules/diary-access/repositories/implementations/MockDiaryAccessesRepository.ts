/* eslint-disable no-unused-vars */
import { ICheckDiaryAccessPermissionDTO } from '../../dtos/ICheckDiaryAcessPermissionDTO';
import { IGiveDiaryAccessToProfessionalDTO } from '../../dtos/IGiveDiaryAccessToProfessionalDTO';
import { IRevokeDiaryAccessToProfessionalDTO } from '../../dtos/IRevokeDiaryAccessToProfessionalDTO';
import { ValidDiaryAccesses } from '../../mocks/valid-diary-accesses';
import { IDiaryAccessesRepository } from '../IDiaryAccessesRepository';

export class MockDiaryAccessesRepository implements IDiaryAccessesRepository {
  public async giveAccessToProfessional(params: IGiveDiaryAccessToProfessionalDTO): Promise<void> {
    ValidDiaryAccesses.push({
      ...params,
      id: `${Math.random()}`,
    });
  }

  public async checkDiaryAccessPermission(params: ICheckDiaryAccessPermissionDTO): Promise<boolean> {
    const existingDiaryAccess = ValidDiaryAccesses.find((diaryAccess) => (
      diaryAccess.studentId === params.studentId
      && diaryAccess.professionalId === params.professionalId
    ));
    return !!existingDiaryAccess;
  }

  public async revokeAccessToProfessional(params: IRevokeDiaryAccessToProfessionalDTO): Promise<void> {
    const diaryAccessIndex = ValidDiaryAccesses.findIndex((diaryAccess) => (
      diaryAccess.studentId === params.studentId
      && diaryAccess.professionalId === params.professionalId
    ));
    console.log('👻', diaryAccessIndex);
  }
}

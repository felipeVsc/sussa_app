import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiDiaryAccessesRepository } from '../../repositories/implementations/ApiDiaryAccessesRepository';
import { MockDiaryAccessesRepository } from '../../repositories/implementations/MockDiaryAccessesRepository';
import { CheckExistingDiaryAccessPermissionUseCase } from './CheckExistingDiaryAccessPermissionUseCase';

export const checkExistingDiaryAccessPermissionUseCase = new CheckExistingDiaryAccessPermissionUseCase(
  new ApiDiaryAccessesRepository(),
);

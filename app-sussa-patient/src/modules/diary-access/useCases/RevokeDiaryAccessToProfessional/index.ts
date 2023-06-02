import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiDiaryAccessesRepository } from '../../repositories/implementations/ApiDiaryAccessesRepository';
import { MockDiaryAccessesRepository } from '../../repositories/implementations/MockDiaryAccessesRepository';
import { RevokeDiaryAccessToProfessionalUseCase } from './RevokeDiaryAccessToProfessionalUseCase';

export const revokeDiaryAccessToProfessionalUseCase = new RevokeDiaryAccessToProfessionalUseCase(
  ENABLE_MOCKS ? new MockDiaryAccessesRepository() : new ApiDiaryAccessesRepository(),
);

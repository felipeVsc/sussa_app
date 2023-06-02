import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiDiaryAccessesRepository } from '../../repositories/implementations/ApiDiaryAccessesRepository';
import { MockDiaryAccessesRepository } from '../../repositories/implementations/MockDiaryAccessesRepository';
import { GiveDiaryAccessToProfessionalUseCase } from './GiveDiaryAccessToProfessionalUseCase';

export const giveDiaryAccessToProfessionalUseCase = new GiveDiaryAccessToProfessionalUseCase(
  ENABLE_MOCKS ? new MockDiaryAccessesRepository() : new ApiDiaryAccessesRepository(),
);

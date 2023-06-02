import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiProfessionalRepository } from '../../repositories/implementations/ApiProfessionalRepository';
import { MockProfessionalRepository } from '../../repositories/implementations/MockProfessionalRepository';
import { AuthenticateProfessionalUseCase } from './AuthenticateProfessionalUseCase';

export const authenticateProfessionalUseCase = new AuthenticateProfessionalUseCase(
  ENABLE_MOCKS ? new MockProfessionalRepository() : new ApiProfessionalRepository(),
);

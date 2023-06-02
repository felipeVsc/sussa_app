import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiProfessionalRepository } from '../../repositories/implementations/ApiProfessionalRepository';
import { MockProfessionalRepository } from '../../repositories/implementations/MockProfessionalRepository';
import { GetAllProfessionalsUseCase } from './GetAllProfessionalsUseCase';

export const getAllProfessionalsUseCase = new GetAllProfessionalsUseCase(
  ENABLE_MOCKS ? new MockProfessionalRepository() : new ApiProfessionalRepository(),
);

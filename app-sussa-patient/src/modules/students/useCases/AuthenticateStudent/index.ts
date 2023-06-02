import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiStudentRepository } from '../../repositories/implementations/ApiStudentRepository';
import { MockStudentRepository } from '../../repositories/implementations/MockStudentRepository';
import { AuthenticateStudentUseCase } from './AuthenticateStudentUseCase';

export const authenticateStudentUseCase = new AuthenticateStudentUseCase(
  ENABLE_MOCKS ? new MockStudentRepository() : new ApiStudentRepository(),
);

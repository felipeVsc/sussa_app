import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiStudentRepository } from '../../repositories/implementations/ApiStudentRepository';
import { MockStudentRepository } from '../../repositories/implementations/MockStudentRepository';
import { CreateStudentUseCase } from './CreateStudentUseCase';

export const createStudentUseCase = new CreateStudentUseCase(
  ENABLE_MOCKS ? new MockStudentRepository() : new ApiStudentRepository(),
);

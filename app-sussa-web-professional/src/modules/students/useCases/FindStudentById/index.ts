import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiStudentRepository } from '../../repositories/implementations/ApiStudentRepository';
import { MockStudentRepository } from '../../repositories/implementations/MockStudentRepository';
import { FindStudentByIdUseCase } from './FindStudentByIdUseCase';

export const findStudentByIdUseCase = new FindStudentByIdUseCase(
  ENABLE_MOCKS ? new MockStudentRepository() : new ApiStudentRepository(),
);

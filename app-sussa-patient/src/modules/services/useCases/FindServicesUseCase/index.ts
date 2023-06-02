import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiServiceRepository } from '../../repositories/implementations/ApiServiceRepository';
import { MockServiceRepository } from '../../repositories/implementations/MockServiceRepository';
import { FindServicesUseCase } from './FindServicesUseCase';

export const findServicesUseCase = new FindServicesUseCase(
  ENABLE_MOCKS ? new MockServiceRepository() : new ApiServiceRepository(),
);

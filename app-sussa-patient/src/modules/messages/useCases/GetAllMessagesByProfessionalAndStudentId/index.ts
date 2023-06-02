import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiMessagesRepository } from '../../repositories/implementations/ApiMessagesRepository';
import { MockMessagesRepository } from '../../repositories/implementations/MockMessagesRepository';
import { GetAllMessagesByProfessionalAndStudentIdUseCase } from './GetAllMessagesByProfessionalAndStudentIdUseCase';

export const getAllMessagesByProfessionalAndStudentIdUseCase = new GetAllMessagesByProfessionalAndStudentIdUseCase(
  ENABLE_MOCKS ? new MockMessagesRepository() : new ApiMessagesRepository(),
);

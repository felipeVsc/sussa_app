import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiChatRequestsRepository } from '../../repositories/implementations/ApiChatRequestsRepository';
import { MockChatRequestsRepository } from '../../repositories/implementations/MockChatRequestsRepository';
import { GetChatRequestByStudentAndProfessionalIdUseCase } from './GetChatRequestByStudentAndProfessionalIdUseCase';

export const getChatRequestByStudentAndProfessionalIdUseCase = new GetChatRequestByStudentAndProfessionalIdUseCase(
  ENABLE_MOCKS ? new MockChatRequestsRepository() : new ApiChatRequestsRepository(),
);

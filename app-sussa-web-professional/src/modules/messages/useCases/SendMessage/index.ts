import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiMessagesRepository } from '../../repositories/implementations/ApiMessagesRepository';
import { MockMessagesRepository } from '../../repositories/implementations/MockMessagesRepository';
import { SendMessageUseCase } from './SendMessageUseCase';

export const sendMessageUseCase = new SendMessageUseCase(
  ENABLE_MOCKS ? new MockMessagesRepository() : new ApiMessagesRepository(),
);

import { ENABLE_MOCKS } from '../../../../shared/config/mocks';
import { ApiNotificationRepository } from '../../repositories/implementations/ApiNotificationRepository';
import { MockNotificationRepository } from '../../repositories/implementations/MockNotificationRepository';
import { FindNotificationUseCase } from './FindNotificationUseCase';

export const findNotificationUseCase = new FindNotificationUseCase(
  new ApiNotificationRepository()
);

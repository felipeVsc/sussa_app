/* eslint-disable no-unused-vars */
import { Notification } from '../entities/Notification';

export interface INotificationRepository {
  index(): Promise<Notification[]>;
}

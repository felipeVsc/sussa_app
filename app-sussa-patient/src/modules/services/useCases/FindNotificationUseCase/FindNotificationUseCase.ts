/* eslint-disable no-unused-vars */
import { Notification } from '../../entities/Notification';
import { INotificationRepository } from '../../repositories/INotificationRepository';

export class FindNotificationUseCase {
  constructor(
    private repository: INotificationRepository,
  ) {}

  public async execute(): Promise<Notification[]> {
    return this.repository.index();
  }
}

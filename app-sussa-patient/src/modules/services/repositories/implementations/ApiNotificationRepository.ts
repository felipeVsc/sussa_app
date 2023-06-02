/* eslint-disable no-unused-vars */
import { Notification } from '../../entities/Notification';
import { INotificationRepository } from '../INotificationRepository';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export class ApiNotificationRepository implements INotificationRepository {
  public async index(): Promise<Notification[]> {
    const response = await axiosHttpClient.get('/api/notifications/'); 
    console.log("response:");
    console.log(response.data);
    return response.data.map((notification: any) => {
      const { title,content,notification_type } = notification;
      return new Notification(title,content,notification_type);
    });
  }
}

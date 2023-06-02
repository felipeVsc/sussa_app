import { IPublishMessageDTO } from "../../dtos/IPublishMessageDTO";
import { Message } from "../../entities/Message";
import { IMessagesRepository } from "../IMessagesRepository";

/* eslint-disable no-unused-vars */
export class ApiMessagesRepository implements IMessagesRepository {
  public async send(message: IPublishMessageDTO): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async getAllMessagesByProfessionalId(
    professionalId: string,
    studentId: string
  ): Promise<Message[]> {
    throw new Error('Method not implemented');
  }
}

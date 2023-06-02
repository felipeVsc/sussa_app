import { IPublishMessageDTO } from "../../dtos/IPublishMessageDTO";
import { Message } from "../../entities/Message";
import { ValidMessagesMock } from "../../mocks/valid-messages";
import { IMessagesRepository } from "../IMessagesRepository";

/* eslint-disable no-unused-vars */
export class MockMessagesRepository implements IMessagesRepository {
  public async send(message: IPublishMessageDTO): Promise<void> {
    console.log(message);
    ValidMessagesMock.push({
      ...message,
      id: `${Math.random()}`,
      sentAt: new Date()
    });
  }

  public async getAllMessagesByProfessionalId(
    professionalId: string,
    studentId: string
  ): Promise<Message[]> {
    return ValidMessagesMock.filter(message =>  
      (message.toId === professionalId && message.fromId === studentId)
      || (message.fromId === professionalId && message.toId === studentId)
    );
  }

}

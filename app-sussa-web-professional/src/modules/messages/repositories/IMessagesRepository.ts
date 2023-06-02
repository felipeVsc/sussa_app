/* eslint-disable no-unused-vars */
import { Professional } from "../../professionals/entities/Professional";
import { Student } from "../../students/entities/Student";
import { IPublishMessageDTO } from "../dtos/IPublishMessageDTO";
import { Message } from "../entities/Message";

export interface IMessagesRepository {
  send(message: IPublishMessageDTO): Promise<void>;
  getAllMessagesByProfessionalId(
    professionalId: Professional['id'],
    studentId: Student['id'],
  ): Promise<Message[]>;
}

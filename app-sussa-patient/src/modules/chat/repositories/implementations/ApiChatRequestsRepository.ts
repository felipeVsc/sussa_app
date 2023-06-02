
import { IGetChatRequestByStudentAndProfessionalIdDTO } from "../../dtos/IGetChatRequestByStudentAndProfessionalIdDTO";
import { ChatRequest } from "../../entities/ChatRequest";
import { IChatRequestsRepository } from "../IChatRequestsRepository";

/* eslint-disable no-unused-vars */
export class ApiChatRequestsRepository implements IChatRequestsRepository {
  public async getChatRequestByStudentAndProfessionalId(params: IGetChatRequestByStudentAndProfessionalIdDTO): Promise<ChatRequest | undefined> {
    throw new Error("Method not implemented.");
  }
}

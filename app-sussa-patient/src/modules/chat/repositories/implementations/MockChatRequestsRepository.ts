
import { IGetChatRequestByStudentAndProfessionalIdDTO } from "../../dtos/IGetChatRequestByStudentAndProfessionalIdDTO";
import { ChatRequest } from "../../entities/ChatRequest";
import { ValidChatRequests } from "../../mocks/valid-chat-requests";
import { IChatRequestsRepository } from "../IChatRequestsRepository";

/* eslint-disable no-unused-vars */
export class MockChatRequestsRepository implements IChatRequestsRepository {
  public async getChatRequestByStudentAndProfessionalId(params: IGetChatRequestByStudentAndProfessionalIdDTO): Promise<ChatRequest | undefined> {
    return ValidChatRequests.find(chatRequest => (
      chatRequest.studentId === params.studentId 
      && chatRequest.professionalId === params.professionalId 
    ));
  }
}

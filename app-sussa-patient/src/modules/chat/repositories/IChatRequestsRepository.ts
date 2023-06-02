import { IGetChatRequestByStudentAndProfessionalIdDTO } from "../dtos/IGetChatRequestByStudentAndProfessionalIdDTO";
import { ChatRequest } from "../entities/ChatRequest";

/* eslint-disable no-unused-vars */
export interface IChatRequestsRepository {
  getChatRequestByStudentAndProfessionalId(params: IGetChatRequestByStudentAndProfessionalIdDTO): Promise<ChatRequest | undefined>;
}

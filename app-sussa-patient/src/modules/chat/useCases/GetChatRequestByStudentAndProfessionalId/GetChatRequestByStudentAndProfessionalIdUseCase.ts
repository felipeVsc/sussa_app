import { Professional } from "../../../professionals/entities/Professional";
import { Student } from "../../../students/entities/Student";
import { IGetChatRequestByStudentAndProfessionalIdDTO } from "../../dtos/IGetChatRequestByStudentAndProfessionalIdDTO";
import { ChatRequest } from "../../entities/ChatRequest";
import { IChatRequestsRepository } from "../../repositories/IChatRequestsRepository";

/* eslint-disable no-unused-vars */
export class GetChatRequestByStudentAndProfessionalIdUseCase {
  constructor(
    private repository: IChatRequestsRepository,
  ) {}

  public async execute(
    params: IGetChatRequestByStudentAndProfessionalIdDTO    
  ): Promise<ChatRequest | undefined> {
    return this.repository.getChatRequestByStudentAndProfessionalId(params);
  }
}

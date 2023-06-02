import { Professional } from "../../../professionals/entities/Professional";
import { Student } from "../../../students/entities/Student";
import { Message } from "../../entities/Message";
import { IMessagesRepository } from "../../repositories/IMessagesRepository";

/* eslint-disable no-unused-vars */
export class GetAllMessagesByProfessionalAndStudentIdUseCase {
  constructor(
    private repository: IMessagesRepository,
  ) {}

  public async execute(
    professionalId: Professional['id'],
    studentId: Student['id'],
  ): Promise<Message[]> {
    return this.repository.getAllMessagesByProfessionalId(
      professionalId,
      studentId
    );
  }
}

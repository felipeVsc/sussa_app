import { ValidJessicaAtreidesMessages } from "../../messages/mocks/jessica-atreides-messages";
import { ValidPaulAtreidesMessages } from "../../messages/mocks/paul-atreides-messages";
import { ChatRequest } from "../entities/ChatRequest";

export const ValidChatRequests: ChatRequest[] = [
  {
    id: `${Math.random()}`,
    professionalId: 'valid-id',
    studentId: 'valid-student-id',
    status: true,
    studentMessage: ValidPaulAtreidesMessages[0].content,
  },
  {
    id: `${Math.random()}`,
    professionalId: 'valid-id-2',
    studentId: 'valid-student-id',
    status: false,
    studentMessage: ValidJessicaAtreidesMessages[0].content,
  },
]
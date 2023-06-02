import { ValidProfessionalsMock } from "../../professionals/mocks/valid-professionals";
import { Message } from "../entities/Message";

export const ValidPaulAtreidesMessages: Message[] = [
  {
    id: `${Math.random()}`,
    fromId: 'richard-id',
    toId: ValidProfessionalsMock[0].id,
    content: 'Olá, Paul. Gostaria de uma consulta.',
    sentAt: new Date('2023-03-01T12:00:00.000Z'),
  },
  {
    id: `${Math.random()}`,
    fromId: ValidProfessionalsMock[0].id,
    toId: 'richard-id',
    content: 'Olá, Richard',
    sentAt: new Date('2023-03-01T13:00:00.000Z'),
  },
];
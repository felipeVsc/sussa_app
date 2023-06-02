import { Message } from "../entities/Message";

export const ValidPaulAtreidesMessages: Message[] = [
  {
    id: `${Math.random()}`,
    fromId: 'valid-student-id',
    toId: 'valid-id',
    content: 'Olá, Paul. Gostaria de uma consulta.',
    sentAt: new Date('2023-03-01T12:00:00.000Z'),
  },
  {
    id: `${Math.random()}`,
    fromId: 'valid-id',
    toId: 'valid-student-id',
    content: 'Olá, John',
    sentAt: new Date('2023-03-01T13:00:00.000Z'),
  },
];
import { Message } from "../entities/Message";
import { ValidPaulAtreidesMessages } from "./paul-atreides-messages";
import { ValidJessicaAtreidesMessages } from "./jessica-atreides-messages";

export const ValidMessagesMock: Message[] = [
  ...ValidPaulAtreidesMessages,
  ...ValidJessicaAtreidesMessages,
];
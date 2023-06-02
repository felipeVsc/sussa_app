/* eslint-disable no-unused-vars */

export class Message {
  constructor(
    readonly id: string,
    readonly fromId: string,
    readonly toId: string,
    readonly content: string,
    readonly sentAt: Date
  ) {}
}

/* eslint-disable no-unused-vars */

export class ChatRequest {
  constructor(
    readonly id: string,
    readonly studentId: string,
    readonly professionalId: string,
    readonly studentMessage: string,
    readonly status: boolean 
  ) {}
}

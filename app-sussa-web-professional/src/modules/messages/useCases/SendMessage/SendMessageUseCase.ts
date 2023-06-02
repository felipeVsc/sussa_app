import { IPublishMessageDTO } from "../../dtos/IPublishMessageDTO";
import { IMessagesRepository } from "../../repositories/IMessagesRepository";

/* eslint-disable no-unused-vars */
export class SendMessageUseCase {
  constructor(
    private repository: IMessagesRepository,
  ) {}

  public async execute(params: IPublishMessageDTO): Promise<void> {
    return this.repository.send(params);
  }
}

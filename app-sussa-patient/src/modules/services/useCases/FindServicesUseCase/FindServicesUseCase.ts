/* eslint-disable no-unused-vars */
import { Service } from '../../entities/Service';
import { IServiceRepository } from '../../repositories/IServiceRepository';

export class FindServicesUseCase {
  constructor(
    private repository: IServiceRepository,
  ) {}

  public async execute(): Promise<Service[]> {
    return this.repository.index();
  }
}

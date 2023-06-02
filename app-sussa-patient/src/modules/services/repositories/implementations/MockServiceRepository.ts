import { Service } from '../../entities/Service';
import { ValidServicesMock } from '../../mocks/valid-services';
import { IServiceRepository } from '../IServiceRepository';

export class MockServiceRepository implements IServiceRepository {
  public async findById(id: Service['id']): Promise<Service | undefined> {
    return ValidServicesMock.find((service) => service.id === id);
  }

  public async index(): Promise<Service[]> {
    return ValidServicesMock;
  }
}

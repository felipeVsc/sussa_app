/* eslint-disable no-unused-vars */
import { Service } from '../entities/Service';

export interface IServiceRepository {
  findById(id: Service['id']): Promise<Service | undefined>;
  index(): Promise<Service[]>;
}

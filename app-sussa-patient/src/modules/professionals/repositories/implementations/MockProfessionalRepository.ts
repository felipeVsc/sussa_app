/* eslint-disable no-unused-vars */
import { Professional } from '../../entities/Professional';
import { ValidProfessionalsMock } from '../../mocks/valid-professionals';
import { IProfessionalRepository } from '../IProfessionalRepository';

export class MockProfessionalRepository implements IProfessionalRepository {
  async index(): Promise<Professional[]> {
    return ValidProfessionalsMock;
  }

  async findById(id: string): Promise<Professional | undefined> {
    return ValidProfessionalsMock.find((professional) => professional.id === id);
  }
}

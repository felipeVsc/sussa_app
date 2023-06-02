/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../../presentation/context/authentication/props';
import { IAuthenticateProfessionalDTO } from '../../dtos/IAuthenticateProfessionalDTO';
import { Professional } from '../../entities/Professional';
import { ValidProfessionalsMock } from '../../mocks/valid-professionals';
import { IProfessionalRepository } from '../IProfessionalRepository';

export class MockProfessionalRepository implements IProfessionalRepository {
  async authenticate(params: IAuthenticateProfessionalDTO): Promise<IProfileMetadata> {
    return {
      professional: ValidProfessionalsMock[0]
    };
  }


  async index(): Promise<Professional[]> {
    return ValidProfessionalsMock;
  }

  async findById(id: string): Promise<Professional | undefined> {
    return ValidProfessionalsMock.find((professional) => professional.id === id);
  }
}

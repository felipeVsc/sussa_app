/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../presentation/context/authentication/props';
import { IAuthenticateProfessionalDTO } from '../dtos/IAuthenticateProfessionalDTO';
import { Professional } from '../entities/Professional';

export interface IProfessionalRepository {
  authenticate(params: IAuthenticateProfessionalDTO): Promise<IProfileMetadata>;
  index(): Promise<Professional[]>;
  findById(id: Professional['id']): Promise<Professional | undefined>;
}

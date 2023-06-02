/* eslint-disable no-unused-vars */
import { Professional } from '../entities/Professional';

export interface IProfessionalRepository {
  index(): Promise<Professional[]>;
  findById(id: Professional['id']): Promise<Professional | undefined>;
}

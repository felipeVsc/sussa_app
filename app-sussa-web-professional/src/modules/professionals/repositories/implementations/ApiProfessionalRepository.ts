/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../../presentation/context/authentication/props';
import { IAuthenticateProfessionalDTO } from '../../dtos/IAuthenticateProfessionalDTO';
import { Professional } from '../../entities/Professional';
import { IProfessionalRepository } from '../IProfessionalRepository';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export class ApiProfessionalRepository implements IProfessionalRepository {
  async authenticate(params: IAuthenticateProfessionalDTO): Promise<IProfileMetadata> {
    const response = await axiosHttpClient.post('/api/web/auth/', params);
    
    const { email,first_name,id,last_name,photo,crp,role,description } = response.data['professional'];
    return {professional:new Professional(id,crp,first_name,last_name,email,role,description)};
  }

  async index(): Promise<Professional[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<Professional | undefined> {
    throw new Error('Method not implemented.');
  }
}

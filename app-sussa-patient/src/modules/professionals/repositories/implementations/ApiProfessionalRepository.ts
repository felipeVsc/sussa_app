/* eslint-disable no-unused-vars */
import { Professional } from '../../entities/Professional';
import { IProfessionalRepository } from '../IProfessionalRepository';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export class ApiProfessionalRepository implements IProfessionalRepository {
  public async index(): Promise<Professional[]> {
    const response = await axiosHttpClient.get('/api/professional/'); 

    return response.data.map((professional: any) => {
      const { crp, description, first_name, id, last_name, photo, role, status } = professional;
      return new Professional(id,crp,status,first_name,last_name,description,role,photo);
    });

  }

  async findById(id: string): Promise<Professional | undefined> {
    const response = await axiosHttpClient.get(`/api/professional/${id}`); 
    return response.data.map((professional: any) => {
      const { crp, description, first_name, id, last_name, photo, role, status } = professional;
      return new Professional(id,crp,status,first_name,last_name,description,role,photo);
    });
  }
}

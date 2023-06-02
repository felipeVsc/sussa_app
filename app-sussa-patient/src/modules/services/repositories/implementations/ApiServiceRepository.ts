/* eslint-disable no-unused-vars */
import { Service } from '../../entities/Service';
import { IServiceRepository } from '../IServiceRepository';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export class ApiServiceRepository implements IServiceRepository {
  public async findById(id: Service['id']): Promise<Service | undefined> {
    const response = await axiosHttpClient.get(`/api/service/${id}`); 

    return response.data['results'].map((service: any) => {
      const { content,cta,id,link,name, photo } = service;
      return new Service(id, name, content, cta, link, photo);
    });
  }

  public async index(): Promise<Service[]> {
    const response = await axiosHttpClient.get('/api/service/'); 

    return response.data['results'].map((service: any) => {
      const { content,cta,id,link,name, photo } = service;
      return new Service(id, name, content, cta, link, photo);
    });
  }
}

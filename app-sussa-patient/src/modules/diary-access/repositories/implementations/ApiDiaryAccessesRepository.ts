/* eslint-disable no-unused-vars */
import { ICheckDiaryAccessPermissionDTO } from '../../dtos/ICheckDiaryAcessPermissionDTO';
import { IGiveDiaryAccessToProfessionalDTO } from '../../dtos/IGiveDiaryAccessToProfessionalDTO';
import { IRevokeDiaryAccessToProfessionalDTO } from '../../dtos/IRevokeDiaryAccessToProfessionalDTO';
import { IDiaryAccessesRepository } from '../IDiaryAccessesRepository';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
export class ApiDiaryAccessesRepository implements IDiaryAccessesRepository {

  public async checkDiaryAccessPermission(params: ICheckDiaryAccessPermissionDTO): Promise<boolean> {
    const res = await axiosHttpClient.get('/api/diary/access/', {params: params});
    return res.data['value'];
  }

  public async giveAccessToProfessional(params: IGiveDiaryAccessToProfessionalDTO): Promise<void> {
    const response = await axiosHttpClient.post('/api/diary/access/', params);
    return await response.data;
  }

  public async revokeAccessToProfessional(params: IRevokeDiaryAccessToProfessionalDTO): Promise<void> {
    const response = await axiosHttpClient.delete('/api/diary/access/'); 
  }
}

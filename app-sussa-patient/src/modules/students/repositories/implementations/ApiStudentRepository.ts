/* eslint-disable no-unused-vars */
import { IProfileMetadata } from '../../../../presentation/context/authentication/props';
import { IAuthenticateStudentDTO } from '../../dtos/IAuthenticateStudentDTO';
import { ICreateStudentDTO } from '../../dtos/ICreateStudentDTO';
import { Student } from '../../entities/Student';
import { IStudentRepository } from '../IStudentRepository';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export class ApiStudentRepository implements IStudentRepository {
  public async create(student: ICreateStudentDTO): Promise<Student> {
    throw new Error('Method not implemented');
  }

  public async authenticate(params: IAuthenticateStudentDTO): Promise<IProfileMetadata> {
    const response = await axiosHttpClient.post('/api/app/auth/', params);
    
    const { course_id,email,first_name,id,last_name,photo } = response.data['student'];
    return {student:new Student(id,photo,course_id,first_name,last_name,email)};
    
  }
}

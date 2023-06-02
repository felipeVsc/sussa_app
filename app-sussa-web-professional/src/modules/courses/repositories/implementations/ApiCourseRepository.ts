/* eslint-disable no-unused-vars */
import { Course } from '../../entities/Course';
import { ICourseRepository } from '../ICourseRepository';

export class ApiCourseRepository implements ICourseRepository {
  public async findById(id: Course['id']): Promise<Course | undefined> {
    throw new Error('Method not implemented');
  }

  public async index(): Promise<Course[]> {
    throw new Error('Method not implemented');
  }
}

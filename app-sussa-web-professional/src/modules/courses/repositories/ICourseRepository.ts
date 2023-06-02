/* eslint-disable no-unused-vars */
import { Course } from '../entities/Course';

export interface ICourseRepository {
  findById(id: Course['id']): Promise<Course | undefined>;
  index(): Promise<Course[]>;
}

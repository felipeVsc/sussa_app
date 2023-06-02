import { Course } from '../../entities/Course';
import { ValidCoursesMock } from '../../mocks/valid-courses';
import { ICourseRepository } from '../ICourseRepository';

export class MockCourseRepository implements ICourseRepository {
  public async findById(id: Course['id']): Promise<Course | undefined> {
    return ValidCoursesMock.find((course) => course.id === id);
  }

  public async index(): Promise<Course[]> {
    return ValidCoursesMock;
  }
}

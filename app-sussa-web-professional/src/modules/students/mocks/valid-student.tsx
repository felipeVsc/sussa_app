import { ValidCoursesMock } from '../../courses/mocks/valid-courses';
import { Student } from '../entities/Student';

export const ValidStudentMock: Student = {
  id: 'valid-student-id',
  course: ValidCoursesMock[0],
  photo: 'https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_1280.jpg',
  email: 'john.doe@sussa.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '+558299999999',
};

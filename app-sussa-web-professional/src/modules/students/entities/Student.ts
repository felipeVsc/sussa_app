/* eslint-disable no-unused-vars */
import { Course } from '../../courses/entities/Course';

export class Student {
  constructor(
    readonly id: string,
    readonly photo: string | undefined,
    readonly course: Course,
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly phone: string,
  ) {}
}

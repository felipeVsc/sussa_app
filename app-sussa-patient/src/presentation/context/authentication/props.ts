/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { IAuthenticateStudentDTO } from '../../../modules/students/dtos/IAuthenticateStudentDTO';
import { Student } from '../../../modules/students/entities/Student';

export interface IProfileMetadata {
  student: Student;
}

export interface IAuthenticationContextProps {
  profile?: IProfileMetadata | undefined;
  setProfile: (profile: IProfileMetadata) => void;
  authenticate: (params: IAuthenticateStudentDTO) => Promise<void>;
  handleLogout: (
    navigate: (screen: string) => void,
  ) => Promise<void>;
  changeProfile: (params: any) => void
}

export interface IAuthenticationProviderProps {
  children: ReactNode;
}

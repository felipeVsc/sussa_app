/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { IAuthenticateStudentDTO } from '../../../modules/students/dtos/IAuthenticateStudentDTO';
import { Student } from '../../../modules/students/entities/Student';
import { authenticateStudentUseCase } from '../../../modules/students/useCases/AuthenticateStudent';
import { IAuthenticationContextProps, IAuthenticationProviderProps, IProfileMetadata } from './props';


const AuthenticationContext = createContext<IAuthenticationContextProps>({
  profile: undefined,
  setProfile: (profile: IProfileMetadata) => undefined,
  authenticate: (params: IAuthenticateStudentDTO) => undefined,
  handleLogout: (params: any) => undefined,
  changeProfile: (params:any) => undefined,
});

const AuthenticationProvider: React.FC<IAuthenticationProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<IProfileMetadata | undefined>();

  async function authenticate(params: IAuthenticateStudentDTO): Promise<void> {
    try {
      const _profile = await authenticateStudentUseCase.execute(params);
      console.log('🧢', _profile);
      setProfile(_profile);
    } catch (error) {
      console.error(error);
    }
  }

  async function changeProfile(newphoto): Promise<void> {
    try {
      setProfile({student:new Student(profile.student.id,newphoto,profile.student.course,profile.student.firstName,profile.student.lastName,profile.student.email)});
    } catch (error) {
      console.error(error);
    }
  }
  async function handleLogout(
    navigate: (screen: string) => void,
  ): Promise<void> {
    navigate('WelcomeScreen');
  }

  return (
    <AuthenticationContext.Provider
      value={{
        profile,
        setProfile,
        authenticate,
        handleLogout,
        changeProfile
        
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuthentication(): IAuthenticationContextProps {
  return useContext(AuthenticationContext);
}

export { useAuthentication, AuthenticationProvider };

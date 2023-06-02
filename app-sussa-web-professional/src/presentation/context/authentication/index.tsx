/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { IAuthenticateProfessionalDTO } from '../../../modules/professionals/dtos/IAuthenticateProfessionalDTO';
import { authenticateProfessionalUseCase } from '../../../modules/professionals/useCases/AuthenticateProfessional';
import { IAuthenticationContextProps, IAuthenticationProviderProps, IProfileMetadata } from './props';

const AuthenticationContext = createContext<IAuthenticationContextProps>({
  profile: undefined,
  setProfile: (profile: IProfileMetadata) => undefined,
  authenticate: async (params: IAuthenticateProfessionalDTO) => ({}) as IProfileMetadata,
});

const AuthenticationProvider: React.FC<IAuthenticationProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<IProfileMetadata | undefined>();

  async function authenticate(params: IAuthenticateProfessionalDTO): Promise<IProfileMetadata> {
    console.log('BEFORE PROFILE');
    const _profile = await authenticateProfessionalUseCase.execute(params);
    console.log('🧢', _profile);
    setProfile(_profile);
    return _profile;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        profile,
        setProfile,
        authenticate,
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

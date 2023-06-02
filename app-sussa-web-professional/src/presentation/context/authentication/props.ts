/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { IAuthenticateProfessionalDTO } from '../../../modules/professionals/dtos/IAuthenticateProfessionalDTO';
import { Professional } from '../../../modules/professionals/entities/Professional';

export interface IProfileMetadata {
  professional: Professional;
}

export interface IAuthenticationContextProps {
  profile?: IProfileMetadata | undefined;
  setProfile: (profile: IProfileMetadata) => void;
  authenticate: (params: IAuthenticateProfessionalDTO) => Promise<IProfileMetadata>;
}

export interface IAuthenticationProviderProps {
  children: ReactNode;
}

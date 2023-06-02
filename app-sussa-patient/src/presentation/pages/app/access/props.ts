import { Professional } from '../../../../modules/professionals/entities/Professional';

export interface IProfessionalScreenAccessRouteParams {
  params: {
    professional: Professional;
    lastScreen: 'Chat' | 'ProfessionalList';
  }
}

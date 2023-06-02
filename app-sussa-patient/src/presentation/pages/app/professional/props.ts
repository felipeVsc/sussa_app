import { Professional } from '../../../../modules/professionals/entities/Professional';

export interface IProfessionalScreenRouteParams {
  params: {
    professional: Professional;
    lastScreen: 'Chat' | 'ProfessionalList';
  }
}

import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface IListButtonComponentProps extends TouchableOpacityProps{
  title: string;
  subtitle?: string;
  leftFigure: ReactNode;
  figureAtEnd?: ReactNode;
}

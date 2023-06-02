import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ICardComponentProps extends TouchableOpacityProps{
  title: string;
  subtitle: string;
  leftFigure: ReactNode;
  textAtEnd?: string;
}

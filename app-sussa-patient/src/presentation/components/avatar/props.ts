import { ImageProps } from 'react-native';

export interface IAvatarComponentProps extends ImageProps {
  width?: number;
  height?: number;
  borderRadius?: number;
}

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { IAvatarComponentProps } from './props';

export const Avatar = styled.Image<IAvatarComponentProps>`
  width: ${({ width }) => RFValue(width || 50)}px;
  height: ${({ height }) => RFValue(height || 50)}px;
  border-radius: ${({ borderRadius }) => RFValue(borderRadius || 100)}px;
`;

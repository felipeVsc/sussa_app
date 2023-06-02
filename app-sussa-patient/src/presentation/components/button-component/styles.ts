import { Shadow } from 'react-native-shadow-2';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ITextComponentProps, IButtonContainerProps } from './props';

export const ButtonContainer = styled(Shadow)<IButtonContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: ${RFValue(14)}px ${RFValue(48)}px;
  border-radius: ${RFValue(60)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ITextComponentProps>`
  color: ${(props) => props.color};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

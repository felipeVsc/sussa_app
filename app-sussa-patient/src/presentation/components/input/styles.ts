import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { IViewComponentProps, InputComponentProps } from './props';

export const StyledInput = styled.TextInput<InputComponentProps>`
  width: 100%;
  height: ${(props) => props.height}px;
  flex-direction: row-reverse;
  padding-left: ${RFValue(16)}px;
  `;

export const MyView = styled.View<IViewComponentProps>`
  padding: 0 ${RFValue(16)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  background-color: #FBEEFF;
  height: ${(props) => props.height}px;
`;

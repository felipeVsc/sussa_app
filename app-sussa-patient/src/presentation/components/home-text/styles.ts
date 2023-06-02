import { RFValue } from "react-native-responsive-fontsize";
import { IHomeTextComponentProps } from "./props";
import styled from 'styled-components/native';

export const StyledText = styled.Text<IHomeTextComponentProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: #120E21;
  font-weight: bold;
  margin-left: ${RFValue(10)}px;
`;
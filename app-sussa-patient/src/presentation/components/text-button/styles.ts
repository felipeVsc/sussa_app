import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const StyledTextButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: ${RFValue(12)}px;
  margin: ${RFValue(8)}px;
`;

export const StyledTextButtonLabel = styled.Text`
  color: #000000;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  text-align: center;
`;
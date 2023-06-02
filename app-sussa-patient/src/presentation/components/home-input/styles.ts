import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const InputContainer = styled.View`
  width: 100%;
  height: ${RFValue(160)}px;
  background-color: #FBEEFF;
  padding-left: ${RFValue(20)}px;
  padding-top: ${RFValue(8)}px;
  border-radius: ${RFValue(10)}px;
`;

export const InputField = styled.TextInput.attrs({
  textAlignVertical: 'top',
  multiline: true,
})`
  width: 100%;
  height: 100%;
  font-size: ${RFValue(16)}px;
  border-radius: ${RFValue(10)}px;
`;

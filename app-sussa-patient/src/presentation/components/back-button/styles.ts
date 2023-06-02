import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../../shared/theme';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: theme.touchableOpacity.default,
})`
  flex-direction: row;  
  align-items: center;
  width: ${RFValue(100)}px;
`;

export const Icon = styled(Feather).attrs({
  size: RFValue(24),
  color: theme.colors.button.orange,
})``;

export const Text = styled.Text`
  font-family: ${theme.fontFamily.medium};
  margin-left: ${RFValue(4)}px;
  font-size: ${RFValue(18)}px;
  color: ${theme.colors.text.secondary};
`;

import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../shared/theme';

export const BottomTabContainer = styled(View)`
  flex-direction: row;
  background-color: ${theme.colors.pureColors.white};
  justify-content: center;
  align-items: center;
  padding: ${RFValue(24)}px ${RFValue(16)}px;
`;

export const FeatherIcon = styled(Feather).attrs({
  size: RFValue(24),
})``;

export const BottomTabTouchableItem = styled(TouchableOpacity)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const DotWrapper = styled(View)`
  height: ${RFValue(10)}px;
`;

export const Dot = styled(View)<{isFocused?: boolean}>`
  background-color: '#eee';
  border-color: '#eee';
  display: ${({ isFocused }) => (isFocused ? 'flex' : 'none')};
  border-radius: ${RFValue(50)}px;
  margin-top:  ${RFValue(5)}px;
  width: ${RFValue(5)}px;
  height: ${RFValue(5)}px;
`;

import { Image } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../../shared/theme';

export const SussaSmallText = styled(Image)`
  margin-top: ${RFValue(50)}px;
  margin-bottom: ${RFValue(80)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
`;

export const PaginationWrapper = styled.View`
  position: absolute;
  bottom: ${RFValue(50)}px;
  left: ${RFValue(0)}px;
  right: ${RFValue(0)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const PaginationDots = styled.View`
  height: ${RFValue(10)}px;
  width: ${RFValue(10)}px;
  borderRadius: ${RFValue(5)}px;
  backgroundColor: ${theme.colors.icon.primary};
  marginLeft: ${RFValue(10)}px;
`
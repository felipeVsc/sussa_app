import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../shared/theme';

export const Title = styled(Text)`
  font-family: ${theme.fontFamily.black};
  font-size: ${RFValue(32)}px;
`;

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../../../shared/theme';

export const Container = styled(SafeAreaView)`
  padding-top: ${RFValue(16)}px;
  background-color: ${theme.colors.backgroundColor};
  flex: 1;
`;

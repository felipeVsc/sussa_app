import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { TitleComponent } from '../../../components/title';

export const TherapyGif = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  border-radius: ${RFValue(100)}px;
`;

export const InnerContainer = styled.View`
  background-color: white;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Container = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
  padding: 0 ${RFValue(12)}px;
`;

export const HeaderContainer = styled.View`
  padding-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(50)}px;
`;

export const Title = styled(TitleComponent)`
  font-size: ${RFValue(28)}px;
`;

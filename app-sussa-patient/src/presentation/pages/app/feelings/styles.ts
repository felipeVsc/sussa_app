import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../../shared/theme';
import { CardComponent } from '../../../components/card';

export const Container = styled.ScrollView`
  padding-left: ${RFValue(16)}px;
  padding-top: ${RFValue(16)}px;
  background-color: ${theme.colors.backgroundColor};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding-top: ${RFValue(18)}px;
  padding-left: ${RFValue(0)}px;
  padding-right: ${RFValue(14)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(24)}px;
  margin-left: ${RFValue(4)}px;
`;

export const CardsContainer = styled.View`
  padding-right: ${RFValue(16)}px;
  margin-top: ${RFValue(24)}px;
`;

export const CustomCard = styled(CardComponent)`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

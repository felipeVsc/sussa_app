import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../../../shared/theme';
import { ListButtonComponent } from '../../../components/list-button';
import { ButtonComponent } from '../../../components/button-component';

export const Container = styled(SafeAreaView)`
  padding-top: ${RFValue(12)}px;
  background-color: ${theme.colors.backgroundColor};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(14)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const ChevronIcon = styled(Feather).attrs({
  size: RFValue(24),
  name: 'chevron-right',
})``;

export const CustomListButtonComponent = styled(ListButtonComponent).attrs({
})`
  width: 100%;  
`;

export const Title = styled.Text`
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(24)}px;
  margin-left: ${RFValue(12)}px;
`;

export const ContentContainer = styled.View`
  padding: 0 ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(14)}px;
`;

export const Paragraph = styled.Text`
  text-align: justify;
  font-family: ${theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.text.primary};
`;

export const CtaContainer = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(16)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: ${RFValue(100)}px;
`;

export const CtaButton = styled(ButtonComponent).attrs({
  backgroundColor: theme.colors.button.orange,
})``;

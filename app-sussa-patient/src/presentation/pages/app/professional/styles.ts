import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../../../shared/theme';
import { ListButtonComponent } from '../../../components/list-button';
import { CardComponent } from '../../../components/card';
import { AvatarComponent } from '../../../components/avatar';

export const Container = styled(SafeAreaView)`
  padding-top: ${RFValue(12)}px;
  background-color: ${theme.colors.backgroundColor};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const ChevronIcon = styled(Feather).attrs({
  size: RFValue(24),
  name: 'chevron-right',
})``;

export const CustomListButtonComponent = styled(ListButtonComponent).attrs({
})`
  width: 100%;  
`;
export const CustomCard = styled(CardComponent)`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

export const ProfessionalAvatar = styled(AvatarComponent)``;

export const ContentContainer = styled.ScrollView`

`;

export const SubHeaderContainer = styled.View`
  flex-direction: row;
  padding: ${RFValue(24)}px ${RFValue(16)}px;
`;

export const ProfessionalImage = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(100)}px;
`;

export const ProfessionalSubHeaderDataContainer = styled.View`
  padding-left: ${RFValue(12)}px;
  padding-top: ${RFValue(5)}px;
`;

export const ProfessionalSubHeaderName = styled.Text`
  color: ${theme.colors.text.primary};
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(24)}px;
`;

export const ProfessionalSubHeaderRole = styled.Text`
  color: ${theme.colors.text.secondary};
  font-family: ${theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
`;

export const SectionTitle = styled.Text`
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(20)}px;
  margin: ${RFValue(12)}px ${RFValue(16)}px;
`;

export const Paragraph = styled.Text`
  text-align: justify;
  font-family: ${theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.text.primary};
  margin-left: ${RFValue(16)}px;
  margin-right: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const ListButtonsContainer = styled.View`
  margin-top: ${RFValue(12)}px;
`;

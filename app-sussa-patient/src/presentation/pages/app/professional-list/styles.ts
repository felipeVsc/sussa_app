import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../../../shared/theme';
import { ListButtonComponent } from '../../../components/list-button';
import { CardComponent } from '../../../components/card';
import { AvatarComponent } from '../../../components/avatar';
import { InputComponent } from '../../../components/input';

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

export const CardsList = styled.FlatList`
  padding: 0 ${RFValue(16)}px;
  margin-top: ${RFValue(24)}px;
`;

export const CustomCard = styled(CardComponent)`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

export const ProfessionalAvatar = styled(AvatarComponent)``;

export const ProfessionalSearchInput = styled(InputComponent).attrs({
  height: RFValue(48),
})`
  margin: 0 ${RFValue(16)}px;
`;

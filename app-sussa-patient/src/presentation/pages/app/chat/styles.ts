import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../../../shared/theme';
import { ListButtonComponent } from '../../../components/list-button';
import { CardComponent } from '../../../components/card';
import { AvatarComponent } from '../../../components/avatar';
import { InputComponent } from '../../../components/input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView } from 'react-native';
import { TitleComponent } from '../../../components/title';

export const Container = styled(SafeAreaView)`
  padding-top: ${RFValue(12)}px;
  justify-content: space-between;
  flex: 1;
`;

export const ProfessionalName = styled(TitleComponent)`
  font-size: ${RFValue(24)}px;
`

export const KeyboardAvoidingWrapper = styled(KeyboardAvoidingView)`
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.View`
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLeftContainer = styled.View`
  /* background-color    : red; */
`;
export const HeaderRightContainer = styled.View`
  /* background-color    : blue; */
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: ${RFValue(8)}px;
`;

export const ChevronIcon = styled(Feather).attrs({
  size: RFValue(24),
  name: 'chevron-right',
})``;

export const CustomListButtonComponent = styled(ListButtonComponent).attrs({
})`
  width: 100%;  
`;

export const MessageList = styled.FlatList`
  padding: 0 ${RFValue(16)}px;
  margin-top: ${RFValue(24)}px;
`;

export const CustomCard = styled(CardComponent)`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

export const ProfessionalAvatar = styled(AvatarComponent)``;

export const SendMessageInput = styled(InputComponent).attrs({
  height: RFValue(48),
})`
  margin-left: ${RFValue(16)}px;
  margin-right: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const MessageRow = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(12)}px;
`

export const MessageAlign = styled.View`
  padding: ${RFValue(16)}px;
  width: 50%;
`;

export const MessageContainer = styled.View`
  border-radius: ${RFValue(12)}px;
  background-color: ${theme.colors.chat.message};
  padding: ${RFValue(16)}px;
  width: 50%;
`;

export const MessageText = styled.Text`
  font-family: ${theme.fontFamily.medium};
  font-size: ${RFValue(12)}px;
  color: ${theme.colors.pureColors.white};

`;
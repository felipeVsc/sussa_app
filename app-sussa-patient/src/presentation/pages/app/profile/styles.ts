import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../../../shared/theme';
import { CardComponent } from '../../../components/card';
import UfalBlack from '../../../../assets/images/ufal-black.png';

export const Container = styled.ScrollView`
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
  padding-top: ${RFValue(16)}px;
  background-color: ${theme.colors.backgroundColor};
  flex: 1;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  padding: ${RFValue(24)}px 0;
`;

export const ProfileImageContainer = styled.View`
  width: ${RFValue(67)}px;
  height: ${RFValue(72)}px;
`;

export const ProfileImage = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(100)}px;
`;

export const EditProfileImageButton = styled.TouchableOpacity.attrs({
  activeOpacity: theme.touchableOpacity.default,
})`
  position: absolute;
  right: 0;
  bottom: 0;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(64)}px;
  background-color: ${theme.colors.button.orange};
  justify-content: center;
  align-items: center;
`;

export const EditProfileImageIcon = styled(Feather).attrs({
  size: RFValue(16),
  color: theme.colors.pureColors.white,
})``;

export const StudentDataContainer = styled.View`
  padding-left: ${RFValue(12)}px;
  padding-top: ${RFValue(5)}px;
`;

export const StudentName = styled.Text`
  color: ${theme.colors.text.primary};
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(24)}px;
`;

export const StudentCourse = styled.Text`
  color: ${theme.colors.text.secondary};
  font-family: ${theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
`;

export const CardsContainer = styled.View`
  /* background-color: red; */
  margin-top: ${RFValue(12)}px;
  flex: 1;
`;

export const ProfileCardComponent = styled(CardComponent)`
  width: 100%;
  margin-bottom: ${RFValue(16)}px;
`;

export const UfalServicesIcon = styled.Image.attrs({
  source: UfalBlack,
})`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const FeatherIcon = styled(Feather).attrs({
  size: RFValue(24),
})``;

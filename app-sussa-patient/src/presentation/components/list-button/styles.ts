import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../shared/theme';

export const TouchableContainer = styled(TouchableOpacity)`
  background-color: ${theme.colors.card.background};
  height: ${RFValue(100)}px;
  width: 100%;
  padding: ${RFValue(20)}px 0; 
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`  
  padding-top: 0 ;
  padding-bottom: 0 ;
  padding-right: ${RFValue(16)}px;
  padding-left: ${RFValue(16)}px;
`;

export const LeftContainer = styled.View`
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const MiddleContainer = styled.View``;

export const RightContainer = styled.View`
  padding: 0 ${RFValue(24)}px;
  justify-content: center;
`;

export const TextAtEnd = styled.Text`
  font-family: ${theme.fontFamily.semibold};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text.secondary};
`;

export const Title = styled.Text`
  font-family: ${theme.fontFamily.bold};
  font-size: ${RFValue(16)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${theme.fontFamily.medium};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text.secondary};
`;

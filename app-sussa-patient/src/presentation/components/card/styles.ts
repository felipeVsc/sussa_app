import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Shadow } from 'react-native-shadow-2';
import styled from 'styled-components/native';
import { theme } from '../../../shared/theme';

export const TouchableContainer = styled(TouchableOpacity)`
  background-color: ${theme.colors.card.background};
  border-radius: ${RFValue(8)}px;
  width: 90%;
`;

export const ShadowContainer = styled(Shadow).attrs({
  startColor: 'rgba(0,0,0,0.05)',
  endColor: 'rgba(0,0,0,0.001)',
  offset: [2, 2],
  distance: 5,
})`
  background-color: ${theme.colors.card.background};
  border-radius: ${RFValue(8)}px;
  width: 100%;
  padding: ${RFValue(16)}px 0; 
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`  
  padding: 0 ${RFValue(12)}px;
`;

export const LeftContainer = styled.View`
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const MiddleContainer = styled.View``;

export const RightContainer = styled.View`
  padding: 0 ${RFValue(12)}px;
  justify-content: flex-end;
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

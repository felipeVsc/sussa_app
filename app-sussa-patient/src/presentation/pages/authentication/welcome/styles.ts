import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const StyledBackgroundImage = styled(ImageBackground)`
  flex: 1;
  resizeMode: cover;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const WelcomeLogo = styled(Image)`
  margin-top: ${RFValue(100)}px;
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
`;

export const SussaText = styled(Image)`
  margin-bottom: ${RFValue(247)}px;
`;
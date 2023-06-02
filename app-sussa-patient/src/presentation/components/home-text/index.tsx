import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyledText } from './styles';
import { HomeTextProps } from './props';


const HomeText: React.FC<HomeTextProps> = ({ text, fontSize }) => {
  return <StyledText fontSize={RFValue(fontSize)}>{text}</StyledText>;
};

export default HomeText;
import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeText from '../home-text';
import { Container } from './styles';
import { HomeTitleProps } from './props';

const HomeTitle: React.FC<HomeTitleProps> = ({ text, profileImage }) => {
  return (
    <Container>
      {profileImage}
      <View style={{ width: RFValue(10) }} />
      <HomeText fontSize={32} text={text} />
    </Container>
  );
};

export default HomeTitle;

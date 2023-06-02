/* eslint-disable react/require-default-props */
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { ICardComponentProps } from './props';
import {
  Title,
  ShadowContainer,
  TouchableContainer,
  Subtitle,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  ImageContainer,
} from './styles';

export const NotificationCard: React.FC<ICardComponentProps> = ({
  title, subtitle, ...rest
}) => {
  return (
    <TouchableContainer {...rest} activeOpacity={0.7}>
      <ShadowContainer>
        <LeftContainer>
          <MiddleContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </MiddleContainer>
        </LeftContainer>
        <RightContainer>
          <Feather name="chevron-right" size={RFValue(20)} />
        </RightContainer>
      </ShadowContainer>
    </TouchableContainer>
  );
};

/* eslint-disable react/require-default-props */
import React from 'react';
import { ICardComponentProps } from './props';
import {
  Title,
  ShadowContainer,
  TouchableContainer,
  Subtitle,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  TextAtEnd,
  ImageContainer,
} from './styles';

export const CardComponent: React.FC<ICardComponentProps> = ({
  title, subtitle, leftFigure, textAtEnd, ...rest
}) => {
  return (
    <TouchableContainer {...rest} activeOpacity={0.7}>
      <ShadowContainer>
        <LeftContainer>
          <ImageContainer>
            {leftFigure}
          </ImageContainer>
          <MiddleContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </MiddleContainer>
        </LeftContainer>
        {
          textAtEnd && (
          <RightContainer>
            <TextAtEnd>{textAtEnd}</TextAtEnd>
          </RightContainer>
          )
        }
      </ShadowContainer>
    </TouchableContainer>
  );
};

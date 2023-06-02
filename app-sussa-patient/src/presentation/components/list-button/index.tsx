/* eslint-disable react/require-default-props */
import React from 'react';
import { IListButtonComponentProps } from './props';
import {
  Title,
  TouchableContainer,
  Subtitle,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  ImageContainer,
} from './styles';

export const ListButtonComponent: React.FC<IListButtonComponentProps> = ({
  title, subtitle, leftFigure, figureAtEnd, ...rest
}) => {
  return (
    <TouchableContainer {...rest} activeOpacity={0.7}>
      <LeftContainer>
        <ImageContainer>
          {leftFigure}
        </ImageContainer>
        <MiddleContainer>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </MiddleContainer>
      </LeftContainer>
      {
          figureAtEnd && (
          <RightContainer>
            {figureAtEnd}
          </RightContainer>
          )
        }
    </TouchableContainer>
  );
};

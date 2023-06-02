import React from 'react';
import { ITitleComponent } from './props';
import { Title } from './styles';

export const TitleComponent: React.FC<ITitleComponent> = ({ title, ...rest }) => {
  return (
    <Title {...rest}>
      {title}
    </Title>
  );
};

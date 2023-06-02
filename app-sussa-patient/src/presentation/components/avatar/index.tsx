import React from 'react';
import { IAvatarComponentProps } from './props';
import { Avatar } from './styles';

export const AvatarComponent: React.FC<IAvatarComponentProps> = (props) => {
  return (
    <Avatar {...props} />
  );
};

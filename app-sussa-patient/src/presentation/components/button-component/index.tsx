import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IButtonComponentProps } from './props';
import { ButtonContainer, ButtonText } from './styles';

export const ButtonComponent: React.FC<IButtonComponentProps> = ({
  title, onPress, colorText = '#FFFFFF', backgroundColor = '#9378FF', ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} {...rest}>
      <ButtonContainer backgroundColor={backgroundColor}>
        <ButtonText color={colorText}>{title}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

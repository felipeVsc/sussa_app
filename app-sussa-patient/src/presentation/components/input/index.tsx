import React from 'react';
import { MyView, StyledInput } from './styles';
import { IViewComponentProps } from './props';

export const InputComponent: React.FC<IViewComponentProps> = ({
  placeholder, isSecure=false, onChangeText, icon, height, value, elements, ...rest
}) => {
  return (
    <MyView
      height={height}
      placeholder={placeholder}
      icon={icon}
      onChangeText={onChangeText}
      {...rest}
    >
      <StyledInput
        value={value}
        placeholder={placeholder}
        height={height}
        onChangeText={onChangeText}
        {...elements?.input}
        secureTextEntry={isSecure}
      />
      {icon}
    </MyView>
  );
};

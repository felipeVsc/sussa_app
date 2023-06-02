import React from 'react';
import { InputContainer, InputField } from './styles';
import { HomeInputProps } from './props';

const HomeInput: React.FC<HomeInputProps> = ({ placeholder, onChangeText, value }) => {
  return (
    <InputContainer>
      <InputField placeholder={placeholder} onChangeText={onChangeText} value={value}/>
    </InputContainer>
  );
};

export default HomeInput;

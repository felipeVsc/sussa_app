import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Text } from './styles';

export const BackButtonComponent: React.FC<TouchableOpacityProps> = (props) => {
  return (
    <Container {...props}>
      <Icon name="arrow-left" />
      <Text>Voltar</Text>
    </Container>
  );
};

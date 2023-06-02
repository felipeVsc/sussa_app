import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  TherapyGif, Container, HeaderContainer, Title, InnerContainer,
} from './styles';
import Breathing from '../../../../assets/images/breathing.gif';
import { ButtonComponent } from '../../../components/button-component';
import { BackButtonComponent } from '../../../components/back-button';

export const TherapyBreathingScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const [counter, setCounter] = useState(0);
  const [isInspiring, setIsInspiring] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timer;
    if (counter !== 0) {
      interval = setInterval(() => {
        setIsInspiring((previous) => !previous);
      }, 2500);
    } else {
      clearInterval(interval);
      setIsInspiring(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <Container>
      <HeaderContainer>
        <BackButtonComponent onPress={goBack} />
        <Title title="Ciclos de respiração" />
      </HeaderContainer>
      {(counter === 0)
            && (
              <InnerContainer>
                <Text style={{ marginBottom: RFValue(100), fontSize: RFValue(16), textAlign: 'center' }}>
                  Técnicas de respiração podem acalmar o sistema nervoso e reduzir o estresse e a ansiedade.
                  Além disso, a respiração pode ajudar a melhorar a concentração, a reduzir a pressão arterial e a aumentar a sensação de relaxamento.
                </Text>
                <ButtonComponent title="Começar" backgroundColor="#FFD79C" onPress={() => setCounter(counter + 1)}>Começar</ButtonComponent>
              </InnerContainer>
            )}
      {(counter !== 0)
            && (
            <InnerContainer>
              <Text style={{ marginBottom: RFValue(20), fontSize: RFValue(16), textAlign: 'center' }}>
                {isInspiring ? 'Inspire...' : 'Expire...'}
              </Text>
              <TherapyGif source={Breathing} style={{ marginBottom: RFValue(100) }} />
              <ButtonComponent title="Parar" backgroundColor="#FFD79C" onPress={() => setCounter(0)}>Começar</ButtonComponent>
            </InnerContainer>
            )}
    </Container>
  );
};

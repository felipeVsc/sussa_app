import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import { TitleComponent } from '../../../components/title';
import { CardsContainer, Container, CustomCard } from './styles';

export const TherapyScreen: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <TitleComponent title="Área de Terapia" />
      <CardsContainer>
        <CustomCard
          title="Ver psicólogos"
          subtitle="Encontre psicólogos da UFAL"
          leftFigure={<Feather name="users" size={RFValue(24)} />}
          onPress={() => navigate('ProfessionalListScreen' as never)}
        />
        <CustomCard
          title="Ver sentimentos"
          subtitle="Histórico dos seus sentimentos"
          leftFigure={<Feather name="pie-chart" size={RFValue(24)} />}
          onPress={() => navigate('FeelingsScreen' as never)}
        />
        <CustomCard
          title="Ciclos de Respiração"
          subtitle="Inspiração e expiração"
          leftFigure={<Feather name="clock" size={RFValue(24)} />}
          onPress={() => navigate('TherapyBreathingScreen' as never)}
        />
      </CardsContainer>
    </Container>
  );
};

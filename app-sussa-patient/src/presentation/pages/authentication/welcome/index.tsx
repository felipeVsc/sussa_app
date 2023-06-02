import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyledBackgroundImage } from './styles';
import Bubbles from '../../../../assets/images/Bubbles.png';
import Logo from '../../../../assets/images/LogoWelcome.png';
import Sussa from '../../../../assets/images/SUSSA.png';
import { SussaText } from './styles';
import { WelcomeLogo } from './styles';
import { ButtonComponent } from '../../../components/button-component';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../../shared/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const WelcomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const [screenToShow, setScreenToShow] = useState<string>('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@first_login');
      if (value !== null) {
        setScreenToShow('LoginScreen');
      } else {
        setScreenToShow('IntroScreens');
      }
    } catch (e) {
      console.log(e);
    }
  };

  getData();

  return (
    <StyledBackgroundImage source={Bubbles}>
      <WelcomeLogo source={Logo}/>
      <SussaText source={Sussa}/>
      <ButtonComponent 
        title="Entrar" style={{ marginBottom: RFValue(10) }} 
        backgroundColor={theme.colors.icon.primary}  
        onPress={() => navigate(screenToShow as never)}
      />
    </StyledBackgroundImage>
  );
};

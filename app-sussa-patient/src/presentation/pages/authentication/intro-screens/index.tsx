import {
  StyleSheet, Text, View, FlatList,
  StatusBar, SafeAreaView, ScrollView, Dimensions, Image,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { StyledBackgroundImage } from '../welcome/styles';
import Bubbles from '../../../../assets/images/Bubbles.png';
import World from '../../../../assets/images/world.png';
import SmartPhone from '../../../../assets/images/smartphone.png';
import Heart from '../../../../assets/images/heart.png';
import SussaSmall from '../../../../assets/images/SUSSASMALL.png';
import {
  SussaSmallText, Description, PaginationWrapper, PaginationDots,
} from './styles';
import { ButtonComponent } from '../../../components/button-component';
import { theme } from '../../../../shared/theme';

export const IntroScreens = () => {
  const { navigate } = useNavigation();

  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal
          scrollEventThrottle={16}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <StyledBackgroundImage source={Bubbles}>
              <SussaSmallText source={SussaSmall} />
              <Image source={World} />
              <Description style={{ marginTop: -RFValue(80) }}>Somos o seu mundo!</Description>
            </StyledBackgroundImage>
          </View>
          <View style={{ width, height }}>
            <StyledBackgroundImage source={Bubbles}>
              <SussaSmallText source={SussaSmall} />
              <Image source={SmartPhone} />
              <Description style={{ marginTop: -RFValue(50) }}>Fique tranquilo usando o seu celular</Description>
            </StyledBackgroundImage>
          </View>
          <View style={{ width, height }}>
            <StyledBackgroundImage source={Bubbles}>
              <SussaSmallText source={SussaSmall} />
              <Image source={Heart} style={{ marginTop: -RFValue(150) }} />
              <ButtonComponent
                title="Começar"
                style={{ marginTop: -RFValue(20) }}
                backgroundColor={theme.colors.icon.primary}
                onPress={() => navigate('RegisterScreen' as never)}
              />
            </StyledBackgroundImage>
          </View>
        </ScrollView>
        <PaginationWrapper>
          {Array.from(Array(3).keys()).map((key, index) => (
            <PaginationDots style={{ opacity: pageIndex === index ? 1 : 0.2 }} key={index} />
          ))}
        </PaginationWrapper>
      </SafeAreaView>
    </>
  );
};

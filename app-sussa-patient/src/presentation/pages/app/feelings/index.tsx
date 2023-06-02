import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, } from 'react';
import { TitleComponent } from '../../../components/title';
import { CardsContainer, Container } from '../feelings/styles';
import { MyChart } from '../../../components/pie-chart';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { CardText } from '../../../components/home-card/style';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import { BackButtonComponent } from '../../../components/back-button';
import { View } from 'react-native';
import {  HeaderContainer, Title} from './styles';

export const FeelingsScreen: React.FC = () => {
  const { navigate , goBack} = useNavigation();

  const [anger, setAnger] = useState(0);
  const [joy, setJoy] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [sadness, setSadness] = useState(0);

  useEffect(() => {
    const promise = axiosHttpClient.get('/api/diary/report/historic/', {});
    promise.then(response => {
      const data = response.data;
      setAnger(data['anger']);
      setJoy(data['joy']);
      setNeutral(data['neutral']);
      setSadness(data['sadness']);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  const [angerWeek, setAngerWeek] = useState(0);
  const [joyWeek, setJoyWeek] = useState(0);
  const [neutralWeek, setNeutralWeek] = useState(0);
  const [sadnessWeek, setSadnessWeek] = useState(0);

  useEffect(() => {
    const promise = axiosHttpClient.get('/api/diary/report/historic/week/', {});
    promise.then(response => {
      const data = response.data;
      setAngerWeek(data['anger']);
      setJoyWeek(data['joy']);
      setNeutralWeek(data['neutral']);
      setSadnessWeek(data['sadness']);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  const [todayEmotion, setTodayEmotion] = useState("");
  const [todayEmotionIcon, setTodayEmotionIcon] = useState("");

  useEffect(() => {
    const promise = axiosHttpClient.get('/api/diary/report/historic/today/', {});
    promise.then(response => {
      const data = response.data;
      setTodayEmotion(data['emotion']);
      setTodayEmotionIcon(data['value']);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);


  return (
    
    <Container>
      <CardsContainer>
      <HeaderContainer>
          <BackButtonComponent onPress={goBack} />
          <TitleComponent title="Sentimentos" />
        </HeaderContainer>
        <CardText>Hoje</CardText>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <CardText>{todayEmotion}</CardText>
          <Feather name={todayEmotionIcon} size={RFValue(50)} />
        </View>
        <CardText>Geral</CardText>
        <MyChart anger={anger} joy={joy} neutral={neutral} sadness={sadness} />
        <CardText>Última semana</CardText>
        <MyChart anger={angerWeek} joy={joyWeek} neutral={neutralWeek} sadness={sadnessWeek} />
      </CardsContainer>
    </Container>
  );
};

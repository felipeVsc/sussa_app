/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AvatarComponent } from '../../../components/avatar';
import { CardComponent } from '../../../components/card';
import HomeInput from '../../../components/home-input';
import { ButtonComponent } from '../../../components/button-component';
import HomeText from '../../../components/home-text';
import { ProfileImage } from '../profile/styles';
import DefaultAvatar from '../../../../assets/images/avatar.png';
import HomeCard from '../../../components/home-card';
import { useEffect } from 'react';

import PaulAtreides from '../../../../assets/images/atreides.png';
import Entrepeneur from '../../../../assets/images/entrepeneur.jpg';
import { theme } from '../../../../shared/theme';
import HomeTitle from '../../../components/home-title';

import { useAuthentication } from '../../../context/authentication';
import { ValidProfessionalsMock } from '../../../../modules/professionals/mocks/valid-professionals';

import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { useForm } from 'react-hook-form';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const HomeScreen: React.FC = () => {
  const { profile } = useAuthentication();
  const [counter, setCounter] = useState(0);
  const { navigate } = useNavigation();
  const { formState: { errors }, getValues } = useForm();
  const [content,setContent] = useState();
  const [storedUsername, setStoredUsername] = useState<string>('');
  const [hasChats, setHasChats] = useState<boolean>(false);
  const [activeChats, setActiveChats] = useState<Object[]>([]);

  useEffect(() => {
    getStoredUsername();
    loadActiveChats();
  }, []);

  const getStoredUsername = async () => {
    try {
      const text = await AsyncStorage.getItem('@username');
      if (text !== null) {
        setStoredUsername(text);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadActiveChats = async () => {
    try {
      const res = await axiosHttpClient.get('/api/chat/');
      if (res.status != 200) {
        console.log(res.data);
        return;
      }

      let chats = res.data
        .filter(chat => chat.status == "O")
        .map(chat => {
          let professional = chat["from_user"]["type"] == "S"
            ? chat["to_user"] : chat["from_user"];

          return {
            "id": chat["id"],
            "title": `${professional["first_name"]} ${professional["last_name"]}`,
            "picture_url": "",
          };
        });

      setActiveChats(chats);
      setHasChats(chats.length > 0);
    } catch (err) {
      console.log(err);
    }
  };

  if (!profile) return <View><Text>Loading...</Text></View>;

  

  const report = async (content) => {
    try {
      const response = await axiosHttpClient.post('/api/diary/report/', {
       content
      });
      
      return await response.data;
    } catch (error) {
      throw error;
    }
  }
  
  const onSubmit = async () => {
    let response = await report(content);
    Toast.show({text1: "Diário submetido com sucesso"});
    setContent(null);
  };


  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.colors.backgroundColor,
        }}
      >
        <View style={{ height: RFValue(30) }} />
        <HomeTitle
          text={`Olá, ${storedUsername}`}
          profileImage={(
            <ProfileImage
              source={profile.student.photo ? { uri: `${axiosHttpClient.defaults.baseURL}${profile.student.photo}` } : DefaultAvatar}
            />
          )}
        />
        <View style={{ height: RFValue(35) }} />
        { (counter === 0)
        && <HomeText fontSize={20} text="Como se sente hoje?" />}
        <View style={{ height: RFValue(18) }} />
        { (counter === 0)
        && (
        <View style={{ alignItems: 'center', paddingHorizontal: RFValue(16) }}>
          <HomeInput placeholder="Digite aqui" value={content} onChangeText={(value) => setContent(value)} />
          <View style={{ height: RFValue(18) }} />
          <ButtonComponent title="Registrar" backgroundColor="#FFD79C" onPress={() => onSubmit()}>Registrar</ButtonComponent>
        </View>
        )}
        <View style={{ height: RFValue(40) }} />
        {(!hasChats)
        && (
        <View style={{ paddingHorizontal: RFValue(16) }}>
          <HomeText fontSize={20} text="Deseja entrar em contato com um psicólogo?" />
          <View style={{ height: RFValue(16) }} />
          <HomeCard icon="user" text="Encontrar psicólogo" />
          <View style={{ height: RFValue(16) }} />
        </View>
        )}
        {hasChats
        && (
        <View style={{ paddingHorizontal: RFValue(16) }}>
          <HomeText fontSize={25} text="Conversas Ativas" />
          <View style={{ height: RFValue(16) }} />
          {
            activeChats.map((item, index) => (
              <CardComponent
                title={item["title"]}
                subtitle={"Psicólogo"}
                leftFigure={item["picture_url"]}
                key={index + 1}
                onPress={() => navigate('ChatScreen' as never, { chat: item, lastScreen: 'Home' } as unknown as never)}
                style={{ marginBottom: 20, width: '100%' }}
              />
            ))
          }
        </View>
        )}
      </View>
    </ScrollView>
  );
};

import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyledBackgroundImage } from '../welcome/styles';
import Bubbles from '../../../../assets/images/Bubbles.png';
import { TextButton } from '../../../components/text-button';
import { StyledView, StyledSmallView } from '../register-screen/styles';
import { ButtonComponent } from '../../../components/button-component';
import { InputComponent } from '../../../components/input';
import { theme } from '../../../../shared/theme';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { useAuthentication } from "../../../../presentation/context/authentication";
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import messaging from '@react-native-firebase/messaging';

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const { authenticate } = useAuthentication();
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@first_login', value);
    } catch (e) {
      console.log(e);
    }
  };

  storeData('false');

  const login = async (username, password) => {
    try {
      const response = await axiosHttpClient.post('/api/app/auth/', {
        username,
        password,
      });

      return response.data;
    } catch (err) {
      const data = err.response.data;
      const key = Object.keys(data)[0];
      Toast.show({ text1: data[key] });

      return null;
    }
  }

  const getFCMToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();

    const response = await axiosHttpClient.post('/api/devices/', {
      registration_id:token,device_type:"android"
    });

  };

  const onSubmit = async (data) => {
    let res = await login(
      getValues('email'),
      getValues('senha'),
    );

    authenticate({
      username: getValues('email'),
      password: getValues('senha')
    });

    if (res != null && res["token"] != null) {
      try {
        await AsyncStorage.setItem('@security_token', res["token"]);
        await AsyncStorage.setItem('@username', res["student"]["first_name"]);
        await AsyncStorage.setItem('@student_id', res["student"]["id"].toString());
      } catch (e) {
        console.log(e);
      }
      getFCMToken();
      navigate('AppBottomTab' as never);
    } else {
      console.log(res);
    }
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(remoteMessage['notification']['title'], remoteMessage['notification']['body']);
    });

    return unsubscribe;
  }, []);

  return (
    <StyledBackgroundImage source={Bubbles}>
      <StyledView style={{ backgroundColor: 'white', marginTop: RFValue(80) }}>
        <Text style={{
          fontSize: RFValue(30),
          marginBottom: RFValue(30),
          marginTop: RFValue(30),
        }}
        >
          Login

        </Text>
        <StyledSmallView>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                placeholder="Email"
                height={RFValue(60)}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && <Text>O campo email é obrigatório.</Text>}
        </StyledSmallView>
        <StyledSmallView>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                placeholder="Senha"
                height={RFValue(60)}
                onChangeText={onChange}
                value={value}
                isSecure
              />
            )}
            name="senha"
            defaultValue=""
          />
          {errors.senha && <Text>O campo senha é obrigatório.</Text>}
        </StyledSmallView>
      </StyledView>
      <ButtonComponent
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        backgroundColor={theme.colors.icon.primary}
        style={{ marginTop: RFValue(50) }}
      />
      <TextButton
        onPress={() => navigate('IntroScreens' as never)}
        myTitle="Não possui uma conta?"
      />
    </StyledBackgroundImage>
  );
}

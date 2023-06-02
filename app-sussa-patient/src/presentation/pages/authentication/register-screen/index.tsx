import React from 'react';
import { Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputComponent } from '../../../components/input';
import { StyledBackgroundImage } from '../welcome/styles';
import Bubbles from '../../../../assets/images/Bubbles.png';
import { StyledView, StyledSmallView } from './styles';
import { ButtonComponent } from '../../../components/button-component';
import { TextButton } from '../../../components/text-button';
import { theme } from '../../../../shared/theme';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function RegisterScreen() {
  const { navigate } = useNavigation();

  const {
    control, handleSubmit, formState: { errors }, getValues,
  } = useForm();

  const createStudent = async () => {
    try {
      const res = await axiosHttpClient.post('api/student/', {
        first_name: getValues('first_name'),
        last_name: getValues('last_name'),
        email: getValues('email'),
        password: getValues('senha'),
        course: 1,
      });
      return res.data;
    } catch (err) {
      const data = err.response.data;
      const key = Object.keys(data)[0];
      Toast.show({text1: data[key]});
    }
  };

  const onSubmit = async (data) => {
    if (getValues('senha') == getValues('confsenha')) {
      let response = await createStudent();
      if (response["email"] != null) {
        Toast.show({text1: "Conta criada com sucesso"});
        navigate('LoginScreen' as never);
      }
    }
  };

  return (
    <StyledBackgroundImage source={Bubbles}>
      <StyledView style={{ backgroundColor: 'white' }}>
        <Text
          style={{
            fontSize: RFValue(30),
            marginBottom: RFValue(30),
            marginTop: RFValue(30),
          }}
        >
          Cadastro

        </Text>
        <StyledSmallView>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                placeholder="Nome"
                height={RFValue(60)}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="first_name"
            defaultValue=""
          />
          {errors.first_name && <Text>O campo nome é obrigatório.</Text>}
        </StyledSmallView>
        <StyledSmallView>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                placeholder="Sobrenome"
                height={RFValue(60)}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="last_name"
            defaultValue=""
          />
          {errors.last_name && <Text>O campo sobrenome é obrigatório.</Text>}
        </StyledSmallView>
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
        <StyledSmallView>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                placeholder="Confirme sua senha"
                height={RFValue(60)}
                onChangeText={onChange}
                value={value}
                isSecure
              />
            )}
            name="confsenha"
            defaultValue=""
          />
          {errors.confsenha && <Text>O campo confirmação de senha é obrigatório.</Text>}
          {getValues('senha') !== getValues('confsenha') && <Text>As senhas devem ser iguais.</Text>}
        </StyledSmallView>
      </StyledView>
      <ButtonComponent
        title="Cadastrar"
        onPress={handleSubmit(onSubmit)}
        backgroundColor={theme.colors.icon.primary}
        style={{ marginTop: RFValue(50) }}
      />
      <TextButton
        onPress={() => navigate('LoginScreen' as never)}
        myTitle="Já possui uma conta?"
      />
    </StyledBackgroundImage>
  );
}

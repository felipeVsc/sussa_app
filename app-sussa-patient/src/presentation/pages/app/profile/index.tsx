import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { TitleComponent } from '../../../components/title';
import { useAuthentication } from '../../../context/authentication';
import {
  Container,
  EditProfileImageButton,
  EditProfileImageIcon,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
  StudentCourse,
  StudentDataContainer,
  StudentName,
  CardsContainer,
  ProfileCardComponent,
  UfalServicesIcon,
  FeatherIcon,
} from './styles';
import DefaultAvatar from '../../../../assets/images/avatar.png';
import * as ImagePicker from 'expo-image-picker';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export const ProfileScreen: React.FC = () => {
  const { profile, handleLogout, changeProfile } = useAuthentication();

  const { navigate } = useNavigation();
  const [image, setImage] = useState(null);


  const img_profile = async () => {
    console.log("gets here");
    const formData = new FormData();
    formData.append('photo',{
      uri: image,
      name: "image.png",
      type: "image/png",
    })
    // formData.append('photo', image, 'profile.png');

    console.log("gets here2");

    try {
      console.log("gets here4");
      const response = await axiosHttpClient.put('/api/user/img/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log("gets here5");
    }catch (error){
      console.error(error);
    }

    console.log("gets here3");

  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    console.log("img");
    console.log(image);

    img_profile();

    changeProfile(image);
    console.log(profile);

  };



  
  return (
    <Container>
      <TitleComponent title="Perfil" />
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage
            source={profile.student.photo ? { uri: `${axiosHttpClient.defaults.baseURL}${profile.student.photo}` } : DefaultAvatar}
          />
          <EditProfileImageButton onPress={pickImage}>
            <EditProfileImageIcon name="edit-3" />
          </EditProfileImageButton>
        </ProfileImageContainer>
        <StudentDataContainer>
          <StudentName>
            {`${profile.student.firstName}`}
          </StudentName>
          <StudentCourse>{profile.student.course.name}</StudentCourse>
        </StudentDataContainer>
      </ProfileContainer>
      <CardsContainer>
        <ProfileCardComponent
          title="Configurações"
          subtitle="Nome, email, senha..."
          leftFigure={<FeatherIcon name="settings" />}
        />
        <ProfileCardComponent
          title="Serviços da UFAL"
          subtitle="Serviços de psicologia da UFAL"
          leftFigure={<UfalServicesIcon />}
          onPress={() => navigate('UfalServicesScreen' as never)}
        />
        <ProfileCardComponent
          title="Sobre o app"
          subtitle="Termos de Uso, Licenças..."
          leftFigure={<FeatherIcon name="info" />}
          onPress={() => navigate('AboutAppScreen' as never)}
        />
        <ProfileCardComponent
          title="Sair do app"
          subtitle="Encerrar sessão"
          leftFigure={<FeatherIcon name="log-out" />}
          onPress={() => handleLogout(navigate)}
        />
      </CardsContainer>
    </Container>
  );
};

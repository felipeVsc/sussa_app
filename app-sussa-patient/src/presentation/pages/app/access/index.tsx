import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect, } from 'react';
import { TitleComponent } from '../../../components/title';
import { CardsContainer, Container } from '../feelings/styles';
import { MyChart } from '../../../components/pie-chart';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { CardText } from '../../../components/home-card/style';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import HomeInput from '../../../components/home-input';
import { ButtonComponent } from '../../../components/button-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import { IProfessionalScreenAccessRouteParams } from './props'
import { BackButtonComponent } from '../../../components/back-button';
import { HeaderContainer } from './styles';
import { checkExistingDiaryAccessPermissionUseCase } from '../../../../modules/diary-access/useCases/CheckExistingDiaryAccessPermission';
import { giveDiaryAccessToProfessionalUseCase } from '../../../../modules/diary-access/useCases/GiveDiaryAccessToProfessional';
import { revokeDiaryAccessToProfessionalUseCase } from '../../../../modules/diary-access/useCases/RevokeDiaryAccessToProfessional';
import { useFeedback } from '../../../context/feedback';

export const AccessScreen: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const { formState: { errors }, getValues } = useForm();
  const [access, setAccess] = useState();
  const { params: { professional, lastScreen } } = useRoute() as IProfessionalScreenAccessRouteParams;

  const { setFeedbackOn } = useFeedback();

  async function handleGiveAccessToDiary() {
    try {
      await giveDiaryAccessToProfessionalUseCase.execute({
        professional: professional.id
      });
      setFeedbackOn({
        title: 'Acesso concedido com sucesso!',
        message: '',
        type: 'success',
      });
      goBack();
    } catch(err) {
      console.log("AccessScreen::handleGiveAccessToDiary", err);
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <BackButtonComponent onPress={goBack} />
        <TitleComponent title="Acesso ao Diário" />
      </HeaderContainer>
      <CardsContainer>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <CardText>Digite uma mensagem</CardText>

        </View>
        <View style={{ alignItems: 'center', paddingHorizontal: RFValue(10) }}>
          <HomeInput placeholder="Digite aqui" value={access} onChangeText={(value) => setAccess(value)} />
          <View style={{ height: RFValue(18) }} />
          <ButtonComponent title="Registrar" backgroundColor="#FFD79C" onPress={() => handleGiveAccessToDiary()}>Registrar</ButtonComponent>
        </View>
      </CardsContainer>
    </Container>
  );
};

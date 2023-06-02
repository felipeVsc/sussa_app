import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackButtonComponent } from '../../../components/back-button';
import { TitleComponent } from '../../../components/title';
import {
  Container,
  CustomListButtonComponent,
  ContentContainer,
  HeaderContainer,
  Paragraph,
  ProfessionalImage,
  ProfessionalSubHeaderDataContainer,
  ProfessionalSubHeaderName,
  ProfessionalSubHeaderRole,
  SectionTitle,
  SubHeaderContainer,
  ListButtonsContainer,
} from './styles';
import DefaultAvatar from '../../../../assets/images/avatar.png';
import { IProfessionalScreenRouteParams } from './props';
import { getChatRequestByStudentAndProfessionalIdUseCase } from '../../../../modules/chat/useCases/GetChatRequestByStudentAndProfessionalId';
import { useAuthentication } from '../../../context/authentication';
import { checkExistingDiaryAccessPermissionUseCase } from '../../../../modules/diary-access/useCases/CheckExistingDiaryAccessPermission';
import { giveDiaryAccessToProfessionalUseCase } from '../../../../modules/diary-access/useCases/GiveDiaryAccessToProfessional';
import { revokeDiaryAccessToProfessionalUseCase } from '../../../../modules/diary-access/useCases/RevokeDiaryAccessToProfessional';
import { useFeedback } from '../../../context/feedback';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const ProfessionalScreen: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const [hasDiaryAccess, setHasDiaryAccess] = useState<boolean>();

  const { profile } = useAuthentication();
  const { setFeedbackOn } = useFeedback();

  const { params: { professional, lastScreen } } = useRoute() as IProfessionalScreenRouteParams;

  
  async function handleRevokeAccessToDiary() {
    await revokeDiaryAccessToProfessionalUseCase.execute({
    });
    setFeedbackOn({
      title: 'Acesso removido com sucesso!',
      message: '',
      type: 'success',
    });
    goBack();
  }

  useEffect(() => {
    (async () => {
      try {
        const hasAccess = await checkExistingDiaryAccessPermissionUseCase.execute({
          professional: professional.id
        });
        setHasDiaryAccess(hasAccess);
      } catch (err) {
        console.log("ProfessionalScreen::diary_access", err);
      }
    })();
  }, []);

  async function onPressRequestChat() {
    try {
      const body = {"to_user": professional.id};
      const res = await axiosHttpClient.post("/api/chat-request/", body);

      if (res.status == 200) {
        Toast.show({text1: "Solicitação de conversa enviada com sucesso"});
      }
    } catch (err) {
      const data = err.response.data;
      const key = Object.keys(data)[0];
      Toast.show({text1: data[key]});
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <BackButtonComponent onPress={goBack} />
        <TitleComponent title="Sobre" />
      </HeaderContainer>
      <ContentContainer>
        <SubHeaderContainer>
          <ProfessionalImage
            source={professional.photo ? { uri: `${axiosHttpClient.defaults.baseURL}${professional.photo}` } : DefaultAvatar}
          />
          <ProfessionalSubHeaderDataContainer>
            <ProfessionalSubHeaderName>
              {`${professional.firstName} ${professional.lastName}`}
            </ProfessionalSubHeaderName>
            <ProfessionalSubHeaderRole>{professional.role}</ProfessionalSubHeaderRole>
          </ProfessionalSubHeaderDataContainer>
        </SubHeaderContainer>
        <SectionTitle>Descrição</SectionTitle>
        <Paragraph>{professional.description}</Paragraph>
        <ListButtonsContainer>
          {
            lastScreen !== 'Chat' && (
              <CustomListButtonComponent
                title="Solicitar Conversa"
                leftFigure={<Feather name="message-square" size={RFValue(24)} />}
                figureAtEnd={<Feather name="chevron-right" size={RFValue(24)} />}
                onPress={() => onPressRequestChat()}
              />
            )
          }
          {
            hasDiaryAccess
              ? (
                <CustomListButtonComponent
                  title="Remover acesso ao diário"
                  leftFigure={<Feather name="x-circle" size={RFValue(24)} />}
                  onPress={() => handleRevokeAccessToDiary()}
                />
              ) : (
                <CustomListButtonComponent
                  title="Conceder acesso ao diário"
                  leftFigure={<Feather name="file-text" size={RFValue(24)} />}
                  onPress={() => {
                    navigate('AccessScreen' as never, {
                      professional,
                      lastScreen: 'ProfessionalList'
                    } as unknown as never);
                  }}
                />
              )
          }
        </ListButtonsContainer>
      </ContentContainer>
    </Container>
  );
};

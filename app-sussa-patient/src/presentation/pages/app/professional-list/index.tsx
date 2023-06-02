import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackButtonComponent } from '../../../components/back-button';
import { TitleComponent } from '../../../components/title';
import {
  CardsList, Container, CustomCard, HeaderContainer, ProfessionalAvatar, ProfessionalSearchInput,
} from './styles';
import { Professional } from '../../../../modules/professionals/entities/Professional';
import { getAllProfessionalsUseCase } from '../../../../modules/professionals/useCases/GetAllProfessionals';
import DefaultAvatar from '../../../../assets/images/avatar.png';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export const ProfessionalListScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    (async () => {
      const _professionals = await getAllProfessionalsUseCase.execute();
      setProfessionals(_professionals);
      setFilteredProfessionals(_professionals);
    })();
  }, []);

  function handleSearch(text: string) {
    if (text.trim().length === 0) {
      setFilteredProfessionals(professionals);
      return;
    }
    const lowerText = text.toLowerCase();
    const _filteredProfessionals = professionals.filter((professional) => {
      return professional.firstName.toLowerCase().startsWith(lowerText)
        || professional.lastName.toLowerCase().startsWith(lowerText);
    });
    setFilteredProfessionals(_filteredProfessionals);
  }
  
  return (
    <Container>
      <HeaderContainer>
        <BackButtonComponent onPress={goBack} />
        <TitleComponent title="Psicólogos" />
      </HeaderContainer>
      <ProfessionalSearchInput
        placeholder="Pesquisa"
        icon={(
          <Feather
            name="search"
            size={RFValue(24)}
            style={{ paddingRight: RFValue(18) }}
          />
        )}
        onChangeText={(text) => handleSearch(text)}
      />
      <CardsList
        data={filteredProfessionals}
        renderItem={({ item }) => {
          const professional = item as Professional;
          return (
            <CustomCard
              title={`${professional.firstName} ${professional.lastName}`}
              key={professional.id}
              subtitle={professional.firstName}
              leftFigure={(
                <ProfessionalAvatar
                source={professional.photo ? { uri: `${axiosHttpClient.defaults.baseURL}${professional.photo}` } : DefaultAvatar}
                />
              )}
              onPress={() => {
                navigate('ProfessionalScreen' as never, {
                  professional,
                  lastScreen: 'ProfessionalList'
                } as unknown as never);
              }}
            />
          );
        }}
      />
    </Container>
  );
};

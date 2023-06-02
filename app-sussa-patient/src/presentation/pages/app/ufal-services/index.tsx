import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { FlatList } from 'react-native';
import { BackButtonComponent } from '../../../components/back-button';
import { TitleComponent } from '../../../components/title';
import {
  ChevronIcon, Container, CustomListButtonComponent, HeaderContainer,
} from './styles';
import UfalService from '../../../../assets/images/ufal-service.png';
import { AvatarComponent } from '../../../components/avatar';
import { findServicesUseCase } from '../../../../modules/services/useCases/FindServicesUseCase';
import { Service } from '../../../../modules/services/entities/Service';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export const UfalServicesScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    (async () => {
      const _services = await findServicesUseCase.execute();
      setServices(_services);
    })();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <BackButtonComponent onPress={goBack} />
        <TitleComponent title="Serviços da UFAL" />
      </HeaderContainer>
      <FlatList
        data={services}
        renderItem={({ item }) => {
          return (
            <CustomListButtonComponent
              title={item.name}
              onPress={() => navigate('UfalServiceScreen' as never, { ufalService: item } as never)}
              leftFigure={<AvatarComponent source={{uri: `${axiosHttpClient.defaults.baseURL}${item.photo}`}} />}
              figureAtEnd={<ChevronIcon />}
            />
          );
        }}
      />
    </Container>
  );
};

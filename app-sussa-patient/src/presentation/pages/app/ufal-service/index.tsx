import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { Linking } from 'react-native';
import { BackButtonComponent } from '../../../components/back-button';
import {
  Container,
  ContentContainer,
  CtaButton,
  CtaContainer,
  HeaderContainer,
  Paragraph,
  Title,
  TitleContainer,
} from './styles';
import UfalService from '../../../../assets/images/ufal-service.png';
import { AvatarComponent } from '../../../components/avatar';
import { IUfalServiceRouteParams } from './props';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';

export const UfalServiceScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { params: { ufalService } } = useRoute() as unknown as IUfalServiceRouteParams;
  return (
    <Container>
      <HeaderContainer>
        <BackButtonComponent onPress={goBack} />
        <TitleContainer>
          <AvatarComponent source={{uri: `${axiosHttpClient.defaults.baseURL}${ufalService.photo}` }} />
          <Title>{ufalService.name}</Title>
        </TitleContainer>
      </HeaderContainer>
      <ContentContainer>
        <Paragraph>
          {ufalService.content}
        </Paragraph>
      </ContentContainer>
      <CtaContainer>
        <CtaButton title={ufalService.cta} onPress={() => Linking.openURL(ufalService.link)} />
      </CtaContainer>
    </Container>
  );
};

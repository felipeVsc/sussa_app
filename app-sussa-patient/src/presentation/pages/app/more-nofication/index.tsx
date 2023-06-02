import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { BackButtonComponent } from '../../../components/back-button';
import {
  Container,
  ContentContainer,

  HeaderContainer,
  Paragraph,
  Title,
  TitleContainer,
} from './styles';
import { ISingleNotificationRouteParams } from './props';
import { Subtitle } from '../../../components/card/styles';

export const SingleNotificationScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { params: { singleNotification } } = useRoute() as unknown as ISingleNotificationRouteParams;
  return (
    <Container>
      <HeaderContainer>
        <BackButtonComponent onPress={goBack} />
        <TitleContainer>
          <Title>{singleNotification.title}</Title>
          <Subtitle>{singleNotification.type}</Subtitle>
        </TitleContainer>
      </HeaderContainer>
      <ContentContainer>
        <Paragraph>
          {singleNotification.content}
        </Paragraph>
      </ContentContainer>
    </Container>
  );
};

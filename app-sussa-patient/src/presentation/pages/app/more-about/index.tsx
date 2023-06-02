import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackButtonComponent } from '../../../components/back-button';
import { TitleComponent } from '../../../components/title';
import { IMoreAboutRouteParams } from './props';
import { Container } from './styles';

export const MoreAboutAppScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { params: { mytitle, mytext } } = useRoute() as unknown as IMoreAboutRouteParams;

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <BackButtonComponent onPress={goBack} />
        <TitleComponent title={mytitle} style={{ marginBottom: RFValue(15) }} />
        <Text
          style={{
            fontSize: RFValue(16),
            marginBottom: RFValue(15),
            marginLeft: RFValue(3),
            textAlign: 'justify',
          }}
        >
          {mytext}
        </Text>
      </ScrollView>
    </Container>
  );
};

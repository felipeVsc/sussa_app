import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackButtonComponent } from '../../../components/back-button';
import { ListButtonComponent } from '../../../components/list-button';
import { TitleComponent } from '../../../components/title';
import { Container } from './styles';
import { textoPolitica, textoTermos } from './texts';

export const AboutAppScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();

  return (
    <Container>
      <BackButtonComponent onPress={goBack} style={{ marginLeft: RFValue(10) }} />
      <TitleComponent title="Sobre o App" style={{ marginBottom: RFValue(25), marginLeft: RFValue(10) }} />
      <ListButtonComponent
        title="Termos de uso"
        leftFigure={<Feather name="book-open" size={RFValue(24)} />}
        figureAtEnd={<Feather name="chevron-right" size={RFValue(24)} />}
        onPress={() => navigate('MoreAboutAppScreen' as never, { mytitle: 'Termos de uso', mytext: textoTermos } as never)}
      />
      <ListButtonComponent
        title="Política de privacidade"
        leftFigure={<Feather name="lock" size={RFValue(24)} />}
        figureAtEnd={<Feather name="chevron-right" size={RFValue(24)} />}
        onPress={() => navigate('MoreAboutAppScreen' as never, { mytitle: 'Política de privacidade', mytext: textoPolitica } as never)}
      />
      {/* <ListButtonComponent
          title="Licenças"
          leftFigure={<Feather name="list" size={RFValue(24)} />}
          figureAtEnd={<Feather name="chevron-right" size={RFValue(24)} />}
          onPress={
            () => navigate(
              "MoreAboutAppScreen" as never,
              { mytitle: "Licenças", mytext: "Test text" } as never
            )
          }
  /> */}
    </Container>
  );
};

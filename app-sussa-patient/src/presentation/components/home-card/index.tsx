import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CardContainer, CardIcon, CardText } from './style';
import { RFValue } from 'react-native-responsive-fontsize';
import { HomeCardProps } from './props';



const HomeCard: React.FC<HomeCardProps> = ({ icon, text }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('ProfessionalListScreen' as never)}>
      <CardContainer>
          <CardIcon name={icon} />
          <CardText>{text}</CardText>
          <Feather name="chevron-right" size={RFValue(24)} />
      </CardContainer>
    </TouchableOpacity>
  );
};

export default HomeCard;
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const CardContainer = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: ${RFValue(4)}px;
  elevation: 5;
  width: 100%;
  height: ${RFValue(103)}px;
`;

export const CardText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 500;
  color: #222;
`;

export const CardIcon = styled(Feather)`
  font-size: ${RFValue(30)}px;
  color: #222;
`;
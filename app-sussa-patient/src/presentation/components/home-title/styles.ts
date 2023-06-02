import styled from 'styled-components/native';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    padding-left: ${RFValue(16)}px;
`;

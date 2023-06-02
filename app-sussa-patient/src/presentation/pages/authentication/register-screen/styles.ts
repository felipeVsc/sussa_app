import { View } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const StyledView = styled(View)`
    align-items: center;
    background-color: white;
    margin-left: ${RFValue(12)}px;
    margin-right: ${RFValue(12)}px;
    margin-top: ${RFValue(30)}px;
    border-radius: ${RFValue(12)}px;;
`

export const StyledSmallView = styled(View)`
    margin-bottom: ${RFValue(15)}px;
    margin-left: ${RFValue(10)}px;
    margin-right: ${RFValue(10)}px;
`

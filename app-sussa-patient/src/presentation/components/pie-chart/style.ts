import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../../shared/theme';

export const PieChartView = styled(View)`
    background-color: white;
`;

export const PieChartText = styled(Text)`
    font-size: ${RFValue(20)}px;
    font-weight: bold;
    text-align: center;
    color: ${theme.colors.text.primary};
`;
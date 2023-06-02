import React from 'react';
import { useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PieChart } from 'react-native-chart-kit';
import { MyChartProps } from './props';
import { theme } from '../../../shared/theme';
import { PieChartView, PieChartText } from './style';

export const MyChart: React.FC<MyChartProps> = ({ joy,anger,neutral,sadness }) => {
  const screenWidth = useWindowDimensions().width;
  const data = [
    {
      name: 'Feliz',
      sentimentos: joy,
      color: theme.colors.pieChart.happyColor,
      legendFontColor: theme.colors.text.primary,
      legendFontSize: RFValue(15),
    },
    {
      name: 'Raiva',
      sentimentos: anger,
      color: theme.colors.pieChart.angerColor,
      legendFontColor: theme.colors.text.primary,
      legendFontSize: RFValue(15),
    },
    {
      name: 'Neutro',
      sentimentos: neutral,
      color: theme.colors.pieChart.neutralColor,
      legendFontColor: theme.colors.text.primary,
      legendFontSize: RFValue(15),
    },
    {
      name: 'Triste',
      sentimentos: sadness,
      color: theme.colors.pieChart.sadColor,
      legendFontColor: theme.colors.text.primary,
      legendFontSize: RFValue(15),
    },
  ];
  return (
    <PieChartView>
      <PieChart
        data={data}
        width={screenWidth}
        height={RFValue(220)}
        chartConfig={{
          backgroundColor: theme.colors.backgroundColor,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          paddingRight: RFValue(12),
        }}
        accessor="sentimentos"
        backgroundColor={theme.colors.backgroundColor}
        paddingLeft={`${RFValue(12)}`}
      />
    </PieChartView>
  );
};

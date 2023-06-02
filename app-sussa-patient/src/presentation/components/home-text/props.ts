import { TextProps } from 'react-native';

export interface HomeTextProps {
    text: string;
    fontSize: number;
}

export interface IHomeTextComponentProps extends TextProps {
    fontSize: number;
}

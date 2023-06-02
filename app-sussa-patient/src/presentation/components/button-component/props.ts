import { TextProps, TouchableOpacityProps } from 'react-native';

export interface ITextComponentProps extends TextProps {
    color?: string;
}

export interface IButtonContainerProps {
    backgroundColor?: string;
}
export interface IButtonComponentProps extends TouchableOpacityProps{
    title?: string;
    backgroundColor?: string;
    colorText?: string;
}

/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { ViewProps, TextInputProps } from 'react-native';

export interface IViewComponentProps extends ViewProps {
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  height: number;
  icon?: ReactNode;
  elements?: {
    input?: TextInputProps;
  };
  isSecure?: boolean;
}

export interface InputComponentProps extends TextInputProps {
  placeholder: string;
  height: number;
}

import { ReactNode } from 'react';

export interface IFeedbackData {
  title: string;
  message: string;
  type: string;
}

/* eslint-disable no-unused-vars */
export interface IFeedbackContextProps {
  feedbackOn: IFeedbackData;
  setFeedbackOn: (feedbackOn: IFeedbackData) => void;
}

export interface IFeedbackProviderProps {
  children: ReactNode;
}

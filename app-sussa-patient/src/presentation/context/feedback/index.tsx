/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import Toast from 'react-native-toast-message';
import { IFeedbackContextProps, IFeedbackData, IFeedbackProviderProps } from './props';

const FeedbackContext = createContext<IFeedbackContextProps>({
  feedbackOn: undefined,
  setFeedbackOn: (feedbackOn: IFeedbackData) => undefined,
});

const FeedbackProvider: React.FC<IFeedbackProviderProps> = ({ children }) => {
  const [feedbackOn, setFeedbackOn] = useState<IFeedbackData>();

  useEffect(() => {
    if (feedbackOn) {
      Toast.show({
        type: feedbackOn.type,
        text1: feedbackOn.title,
        text2: feedbackOn.message,
      });
    }
  }, [feedbackOn]);

  return (
    <FeedbackContext.Provider
      value={{
        feedbackOn,
        setFeedbackOn,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

function useFeedback(): IFeedbackContextProps {
  return useContext(FeedbackContext);
}

export { useFeedback, FeedbackProvider };

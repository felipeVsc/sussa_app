import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { AuthenticationProvider } from './presentation/context/authentication';
import { FeedbackProvider } from './presentation/context/feedback';
import { ApplicationRoutesCollection } from './presentation/routes/ApplicationRoutesCollection';
import messaging from '@react-native-firebase/messaging';



export default function App() {

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    remoteMessage['priority'] = "high";
  });

  return (
    <>
      <FeedbackProvider>
        <AuthenticationProvider>
          <ApplicationRoutesCollection />
        </AuthenticationProvider>
      </FeedbackProvider>
      <Toast />
    </>
);
}

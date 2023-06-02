import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from '../pages/authentication/welcome';
import { ApplicationBottomTabRoutesCollection } from './app-bottom-tab';
import { UfalServicesScreen } from '../pages/app/ufal-services';
import { UfalServiceScreen } from '../pages/app/ufal-service';
import { ProfessionalListScreen } from '../pages/app/professional-list';
import { ProfessionalScreen } from '../pages/app/professional';
import { ChatScreen } from '../pages/app/chat';
import { SingleNotificationScreen } from '../pages/app/more-nofication';
import { TherapyBreathingScreen } from '../pages/app/therapy-breathing';
import { AboutAppScreen } from '../pages/app/about';
import { MoreAboutAppScreen } from '../pages/app/more-about';
import { IntroScreens } from '../pages/authentication/intro-screens';
import RegisterScreen from '../pages/authentication/register-screen';
import LoginScreen from '../pages/authentication/login-screen';
import { FeelingsScreen } from '../pages/app/feelings/index';
import { AccessScreen } from '../pages/app/access/index';

const Stack = createNativeStackNavigator();

export const ApplicationRoutesCollection: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppBottomTab" component={ApplicationBottomTabRoutesCollection} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="UfalServicesScreen" component={UfalServicesScreen} />
        <Stack.Screen name="UfalServiceScreen" component={UfalServiceScreen} />
        <Stack.Screen name="ProfessionalListScreen" component={ProfessionalListScreen} />
        <Stack.Screen name="ProfessionalScreen" component={ProfessionalScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="SingleNotificationScreen" component={SingleNotificationScreen} />
        <Stack.Screen name="TherapyBreathingScreen" component={TherapyBreathingScreen} />
        <Stack.Screen name="AboutAppScreen" component={AboutAppScreen} />
        <Stack.Screen name="MoreAboutAppScreen" component={MoreAboutAppScreen} />
        <Stack.Screen name="IntroScreens" component={IntroScreens} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="FeelingsScreen" component={FeelingsScreen} />
        <Stack.Screen name="AccessScreen" component={AccessScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

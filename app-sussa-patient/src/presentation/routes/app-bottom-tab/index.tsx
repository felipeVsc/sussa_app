/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RFValue } from 'react-native-responsive-fontsize';
import { HomeScreen } from '../../pages/app/home';
import {
  BottomTabContainer, BottomTabTouchableItem,
} from './styles';

import { theme } from '../../../shared/theme';
import { TherapyScreen } from '../../pages/app/therapy';
import { NotificationsScreen } from '../../pages/app/notifications';
import { ProfileScreen } from '../../pages/app/profile';
import {
  SvgHome, SvgNotifications, SvgProfile, SvgSmile,
} from '../../../assets/icons';
import { useAuthentication } from '../../context/authentication';
import { ValidStudentMock } from '../../../modules/students/mocks/valid-student';

const Tab = createBottomTabNavigator();

const routes = [
  {
    name: 'Home', component: HomeScreen, icon: SvgHome, iconProps: { width: RFValue(20), height: RFValue(20) },
  },
  {
    name: 'Therapy', component: TherapyScreen, icon: SvgSmile, iconProps: { width: RFValue(24), height: RFValue(24) },
  },
  {
    name: 'Notifications', component: NotificationsScreen, icon: SvgNotifications, iconProps: { width: RFValue(24), height: RFValue(24) },
  },
  {
    name: 'Profile', component: ProfileScreen, icon: SvgProfile, iconProps: { width: RFValue(20), height: RFValue(20) },
  },
];

function AppBottomTab({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <BottomTabContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true } as any);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const result = routes.find((item) => item.name === route.name);
        if (!result) return <></>;
        const { icon: Icon } = result;

        return (
          <BottomTabTouchableItem
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            key={route.key}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              color={isFocused ? theme.colors.text.secondary : theme.colors.pureColors.lightGrey}
              {...result.iconProps}
            />
          </BottomTabTouchableItem>
        );
      })}
    </BottomTabContainer>
  );
}

export const ApplicationBottomTabRoutesCollection = () => {
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.pureColors.white }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <AppBottomTab {...props} />}
      >
        {
          routes.map((route) => {
            return <Tab.Screen name={route.name} component={route.component} key={route.name} />;
          })
        }
      </Tab.Navigator>
    </SafeAreaView>
  );
};

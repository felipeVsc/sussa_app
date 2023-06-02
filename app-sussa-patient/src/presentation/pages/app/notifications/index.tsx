/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { NotificationCard } from '../../../components/notification-card';
import Entrepeneur from '../../../../assets/images/entrepeneur.jpg';
import Info from '../../../../assets/images/info.png';
import Question from '../../../../assets/images/question.png';
import Smile from '../../../../assets/images/smile.png';
import { AvatarComponent } from '../../../components/avatar';
import { ValidProfessionalsMock } from '../../../../modules/professionals/mocks/valid-professionals';
import { useEffect, useState } from 'react';
import { findNotificationUseCase } from '../../../../modules/services/useCases/FindNotificationUseCase';
import { Notification } from '../../../../modules/services/entities/Notification';

export const NotificationsScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const myText = 'Não importa o quão duro você tente, você nunca será bom o suficiente.';

  const allNotifications = [
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Entrepeneur} />, text: myText, navigationScreen: 'ChatScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Info} />, text: myText, navigationScreen: 'SingleNotificationScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Info} />, text: myText, navigationScreen: 'SingleNotificationScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Question} />, text: myText, navigationScreen: 'SingleNotificationScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Question} />, text: myText, navigationScreen: 'SingleNotificationScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Entrepeneur} />, text: myText, navigationScreen: 'ChatScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Smile} />, text: myText, navigationScreen: 'SingleNotificationScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Smile} />, text: myText, navigationScreen: 'SingleNotificationScreen',
    },
    {
      title: 'Title', subtitle: 'Subtitle', figure: <AvatarComponent source={Question} />, text: myText, navigationScreen: 'SingleNotificationScreen',
    },
  ];


  const [notification, setNotification] = useState<Notification[]>([]);

  useEffect(() => {
    (async () => {
      const _notification = await findNotificationUseCase.execute();
      setNotification(_notification);
    })();
  }, []);


  const notifications = notification.map((item, index) => (
    <NotificationCard
      title={item.title}
      subtitle={item.content}
      key={index}
      style={{marginLeft: RFValue(15)}}                
    //   onPress={() => (item.navigationScreen === 'SingleNotificationScreen'
    //     ? navigate(item.navigationScreen as never, { singleNotification: item } as never)
    //     : navigate('ChatScreen' as never, { professional: ValidProfessionalsMock[0], lastScreen: 'NotificationsScreen' } as unknown as never))}
    onPress={() => navigate('SingleNotificationScreen' as never, { singleNotification: item } as never)}
    />
  ));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: RFValue(36),
          marginLeft: RFValue(15),
          marginBottom: RFValue(8),
        }}
        >
          Notificações
        </Text>
        { notifications }
      </ScrollView>
    </SafeAreaView>
  );
};

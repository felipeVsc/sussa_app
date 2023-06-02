import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useRef, useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  KeyboardAvoidingView, Linking, Platform, Text, View,
} from 'react-native';
import { BackButtonComponent } from '../../../components/back-button';
import { TitleComponent } from '../../../components/title';
import {
  MessageList, Container, CustomCard, HeaderContainer, ProfessionalAvatar, SendMessageInput, MessageContainer, MessageText, MessageAlign, MessageRow, KeyboardAvoidingWrapper, HeaderLeftContainer, HeaderRightContainer, ProfessionalName,
} from './styles';
import { Professional } from '../../../../modules/professionals/entities/Professional';
import { getAllProfessionalsUseCase } from '../../../../modules/professionals/useCases/GetAllProfessionals';
import DefaultAvatar from '../../../../assets/images/avatar.png';
import { IChatScreenRouteParams } from './props';
import { useAuthentication } from '../../../context/authentication';
import { Message } from '../../../../modules/messages/entities/Message';
import { getAllMessagesByProfessionalAndStudentIdUseCase } from '../../../../modules/messages/useCases/GetAllMessagesByProfessionalAndStudentId';
import { sendMessageUseCase } from '../../../../modules/messages/useCases/SendMessage';
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChatScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const { profile } = useAuthentication();
  const { params: { chat, lastScreen } } = useRoute() as IChatScreenRouteParams;
  const [messages, setMessages] = useState<Object[]>();
  const [currentMessage, setCurrentMessage] = useState<string>();

  var msgs: Object[] = null;

  const wsConn = useRef<WebSocket>(null);

  useEffect(() => {
    initWebSocket();
    loadMessages();
  }, []);

  const initWebSocket = async () => {
    const host = axiosHttpClient.defaults.baseURL.split("://")[1];
    const chatId = chat["id"];
    const token = await AsyncStorage.getItem('@security_token');

    wsConn.current = new WebSocket(`ws://${host}/ws/chat/${chatId}/?token=${token}`);

    wsConn.current.onmessage = function(e) {
      const data = JSON.parse(e.data);
      const new_message = {"from_user": data.from_user, "text": data.message};

      msgs = [new_message, ...msgs];
      setMessages(msgs);
    };
  };

  const loadMessages = async () => {
    try {
      const res = await axiosHttpClient.get(`/api/chat/${chat["id"]}/`);
      if (res.status != 200) {
        console.log(res.data);
        return;
      }

      msgs = res.data["results"];
      setMessages(msgs);
    } catch(err) {
      console.log(err);
    }
  };

  async function handleSendMessage() {
    if (!currentMessage || currentMessage.trim() === '') return;

    try {
      const data = JSON.stringify({"message": currentMessage});
      wsConn.current.send(data);
      setCurrentMessage(undefined);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <KeyboardAvoidingWrapper
        behavior="padding"
        enabled={Platform.OS === 'ios'}
      >
        <HeaderContainer>
          <HeaderLeftContainer>
            <BackButtonComponent onPress={goBack} />
            <ProfessionalName title={`${chat["title"]}`} />
          </HeaderLeftContainer>
          <HeaderRightContainer>
            <Feather
              name="phone"
              size={RFValue(24)}
              style={{
                marginRight: RFValue(12),
              }}
              onPress={() => Linking.openURL(`tel:82991031504`)}
            />
            {
              lastScreen === 'Home' && (
                <Feather
                  name="info"
                  size={RFValue(24)}
                  onPress={() => {
                    navigate(
                      'ProfessionalScreen' as never,
                      { chat, lastScreen: 'Chat' } as unknown as never,
                    );
                  }}
                />
              )
            }
          </HeaderRightContainer>
        </HeaderContainer>
        <MessageList
          data={messages}
          inverted
          contentContainerStyle={{
            minHeight: '80%',
            paddingBottom: RFValue(8),
          }}
          renderItem={({ item }) => {
            return (
              <MessageRow>
                {item["from_user"] === profile.student.id && <MessageAlign />}
                <MessageContainer>
                  <MessageText>{item["text"]}</MessageText>
                </MessageContainer>
              </MessageRow>
            );
          }}
        />
        <SendMessageInput
          placeholder="Mensagem"
          value={currentMessage}
          icon={(
            <Feather
              name="send"
              size={RFValue(24)}
              style={{ paddingRight: RFValue(18) }}
              onPress={handleSendMessage}
            />
          )}
          onChangeText={(text) => setCurrentMessage(text)}
          elements={{
            input: {
              onSubmitEditing: handleSendMessage,
            },
          }}
        />
      </KeyboardAvoidingWrapper>
    </Container>
  );
};

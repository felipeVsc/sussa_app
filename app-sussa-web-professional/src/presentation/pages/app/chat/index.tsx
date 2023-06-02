import React, { useEffect, useState, useCallback } from 'react';
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import styles from './styles.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { IChatScreenRouteProps } from './props';
import { findStudentByIdUseCase } from '../../../../modules/students/useCases/FindStudentById';
import { Student } from '../../../../modules/students/entities/Student';
import { getFullName } from '../../../../shared/utils/getFullName';
import { ArrowLeftOutlined, MoreOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Card, Input, Modal } from 'antd';
import { getAllMessagesByProfessionalAndStudentIdUseCase } from '../../../../modules/messages/useCases/GetAllMessagesByProfessionalAndStudentId';
import { useAuthentication } from '../../../context/authentication';
import { sendMessageUseCase } from '../../../../modules/messages/useCases/SendMessage';

interface MessageReceived {
  message: string;
  from_user: number;
}

interface Message {
  message: string;
  from_user: number;
}

export const ChatScreen: React.FC = () => {
  const [pacienteID, setPacienteID] = useState('');
  const [socketUrl, setSocketUrl] = useState('ws://134.209.119.236:8000/ws/chat/');
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    (async () => {
      await setSocketUrl("ws://134.209.119.236:8000/ws/chat/"+localStorage.getItem("chatID")+"/?token="+localStorage.getItem("token"));
    })();
  }, []);

  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
    onMessage: (event) => {
      const message = JSON.parse(event.data) as Message;

      setPacienteID(message.from_user.toString());

      setMessages((prevMessages) => [...prevMessages, message]);
    },
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const messageObject: Message = {
      message: newMessage,
      from_user: 2
    };
    sendMessage(JSON.stringify(messageObject));
    setNewMessage('');
  };

  const lastMessages = messages.slice(-5).reverse();

  return (

<DashboardContainerComponent>
<main className={styles.content}>
  <header className={styles.header}>
    <div className={styles.headerLeft}>
      <div className={styles.headerTextContent}>
        <h1 className={styles.studentName}>{localStorage.getItem("pacientSelectedName")}</h1>
        <h2 className={styles.course}>{"Ciência da Computação"}</h2>
      </div>
    </div>
  </header> 
  <section className={styles.chatContainer} >
    <div className={styles.chat}>
      {
        lastMessages.map(message => {
          const isFromStudent = message.from_user.toString() == pacienteID;
          return (
            <div style={{display: 'flex'}}>
              {
                !isFromStudent && <div style={{width: '50%'}}>&nbsp;</div>
              }
              <Card style={{width: '50%', marginTop: '1.2rem', backgroundColor: '#9279FE', color: 'white'}}>
                {message.message}
              </Card>
              {
                isFromStudent && <div style={{width: '50%'}}>&nbsp;</div>
              }
            </div>
          )
        })
      }
    </div>
    <form onSubmit={handleSendMessage} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{width: '100%', height: 40, backgroundColor: '#FBEEFF'}}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#FFD79C', 
            borderRadius: '5px',
            width: '200px', 
            height: '40px'
          }}
        >
          Enviar
        </button>
      </form>
  </section>
</main>
</DashboardContainerComponent>
  );
};

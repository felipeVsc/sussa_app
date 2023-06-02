
import React, { useEffect, useState } from 'react'

import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import { useAuthentication } from '../../../context/authentication';
import { getFullName } from '../../../../shared/utils/getFullName';
import styles from './styles.module.css';
import {Bar, Doughnut} from 'react-chartjs-2'
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { AxiosResponse } from 'axios';


interface IChat {
  id: number;
  status: string;
}

interface IChatSingleSolic {
  id: number;
  from_user: string;
  status: string;
}

interface IChatSolic {
  incoming: [IChatSingleSolic]
  outgoing: [IChatSingleSolic]
}

interface IWeekEmotions {
  joy: number;
  anger: number;
  neutral: number;
  sadness: number;
}

export const AppHome: React.FC = () => {
  const [checkedChatRequests, setCheckedChatRequests] = useState(false);
  const [myChatsLenght, setMyChatsLenght] = useState(0)
  const [myChatsSolicLenght, setMyChatsSolicLenght] = useState(0)
  const [myWeekEmotions, setMyWeekEmotions] = useState<IWeekEmotions>();
  const [myUsername, setMyUsername] = useState('');
  const { profile, authenticate } = useAuthentication();

  useEffect(() => {
    if (!profile) {
    }
  }, []);

  useEffect(() => {
    const usernameFromStorage = localStorage.getItem('@username');
    if (usernameFromStorage) {
      setMyUsername(usernameFromStorage);
    }

    fetchChatData();
    fetchChatSolic();
    getDiaryReport();
  }, []);

  if (!profile) return <div>Loading...</div>

  async function fetchChatData() {  
    try {
      let response = await axiosHttpClient.get('/api/chat/');
      setMyChatsLenght(response.data.length);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchChatSolic() { 
    try {
      const response: AxiosResponse<IChatSolic> = await axiosHttpClient.get('/api/chat-request/');
      setMyChatsSolicLenght(response.data.incoming.length);

      if (!checkedChatRequests) {
        response.data.incoming.map(async (chat: IChatSingleSolic) => {
          const requestData = {
            accept: true,
          };
          try{
            await axiosHttpClient.put('/api/chat-request/'+chat.id.toString()+"/", requestData)
          }
          catch(error){
            console.error(error);
          }
        });
          setCheckedChatRequests(true);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function getDiaryReport() { 
    try {
      const response: AxiosResponse<IWeekEmotions> = await axiosHttpClient.get('/api/diary/report/historic/week/professional/');
      setMyWeekEmotions(response.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return (
    <DashboardContainerComponent>
      <main className={styles.dashboardContent}>
        <div className={styles.dashboardHeader}>
          <img 
            src={profile.professional.photo || `https://ui-avatars.com/api/?background=FFD79C&name=${getFullName(profile?.professional)}`} 
            alt="Foto do usuário" 
            className={styles.profilePhoto}
          />
          <div className={styles.dashboardHeaderTextContent}>
            <h2 className={styles.welcomeText}>Seja bem vindo,</h2>
            <h1 className={styles.professionalName}>{myUsername}!</h1>

          </div>
        </div>
        <div className={styles.chartsContainer}>
          <div className={styles.barChartContainer}>
            <Bar
              data={{
                labels: ['Joy', 'Anger', 'Neutral', 'Sadness'],
                datasets: [
                  {
                    // id: 1,
                    label: 'Sentimentos dos pacientes na semana',
                    data: [
                      myWeekEmotions?.joy,
                      myWeekEmotions?.anger,
                      myWeekEmotions?.neutral,
                      myWeekEmotions?.sadness
                    ],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                  }
                ]
              }}
            />
          </div>
          <div className={styles.doughnutChartContainer}>
            <Doughnut
              data={{
                labels: ['Em atendimento', 'Esperando sua aprovação para conversa'],
                datasets: [
                  {
                    label: 'Status dos pacientes',
                    data: [myChatsLenght, myChatsSolicLenght],
                    backgroundColor: [
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                    ],
                  }
                ]
              }}
            />
          </div>
        </div>
      </main>
    </DashboardContainerComponent>
  );
};

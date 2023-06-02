import React, { useState, useEffect } from 'react'

import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import { Avatar, Button, List, Modal, Skeleton } from 'antd';
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import { ValidStudentMock } from '../../../../modules/students/mocks/valid-student';
import { Student } from '../../../../modules/students/entities/Student';
import { ValidStudentsMock } from '../../../../modules/students/mocks/valid-students';
import { getFullName } from '../../../../shared/utils/getFullName';
import { ChatScreen } from '../chat';
import { WechatFilled, HistoryOutlined, EyeTwoTone,ArrowLeftOutlined } from '@ant-design/icons';
import {Bar} from 'react-chartjs-2'
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

interface IScreenNotification {
  title: string;
  student: Student;
  figure: React.ReactNode;
}

interface IWeekEmotions {
  joy: number;
  anger: number;
  neutral: number;
  sadness: number;
}

const notifications = [
  {
    title: `Você possui uma conversa em andamento com esse paciente`,
    student: ValidStudentsMock[0],
    figure: <WechatFilled style={{fontSize:'40px'}}  />  
  },
  /*{
    title: `Histórico de diários do paciente`,
    student: ValidStudentsMock[0],
    figure: <HistoryOutlined style={{fontSize:'40px'}}/>  
}*/
  
]


export const Patientmiddle: React.FC = () => {
  const [myUsername, setMyUsername] = useState('');
  const [myId, setMyId] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedNotificationTitle, setSelectedNotificationTitle] = useState<string>();
  const [myWeekEmotions, setMyWeekEmotions] = useState<IWeekEmotions>();

  const { studentId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const usernameFromStorage = localStorage.getItem('pacientSelectedName');
      const localId = await localStorage.getItem('pacientId');
      if (usernameFromStorage) {
        setMyUsername(usernameFromStorage);
      }

      getStudentDiaryReport(localId);
    }
    fetchData();

  }, []);

  const showModal = (studentName: string) => {
    setOpen(true);
    setSelectedNotificationTitle(studentName);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleNotification = (notification: IScreenNotification) => {
    console.log(notification.student)
    //navigate(`/app/chat/${notification.student.id}`);
   
    navigate(`/app/chat/${notification.student.id}`);
 
  };

  async function getStudentDiaryReport(id: string | null) {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/api/diary/report/historic/student/' + id + "/",
        headers: { 
          'Content-Type': 'application/json'
        },
      };

      axiosHttpClient.request(config)
      .then((response) => {
        setMyWeekEmotions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DashboardContainerComponent>
      <main className={styles.dashboardContent}>
        {/*<ArrowLeftOutlined style={{fontSize: 24, marginRight: '1.2rem'}} onClick={() => navigate(-1)}/>*/}
        <h1 className={styles.professionalName}>{myUsername}</h1>
        <div className={styles.barChartContainer}>
            <Bar
              data={{
                labels: ['Joy', 'Anger', 'Neutral', 'Sadness'],
                datasets: [
                  {
                    // id: 1,
                    label: 'Sentimentos do paciente na semana',
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

        <List
          itemLayout="horizontal"
          dataSource={notifications}
          style={{
            width: '100%',
          }}
          renderItem={(item) => (
            <List.Item
            onClick={() => handleNotification(item)}

              style={{backgroundColor: '#fff', padding: '1.6rem', cursor: 'pointer'}}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={item.figure}
                  title={<p style={{margin: 0}}>{item.title}</p>}
                />
              </Skeleton>
            </List.Item>
          )}
        
        />
 
      </main>
    </DashboardContainerComponent>
  );
};

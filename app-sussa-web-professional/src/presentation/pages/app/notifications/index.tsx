
import React, { useEffect, useState } from 'react'

import '../../../../assets/styles/app.css'
import { DashboardContainerComponent } from '../../../components/dashboard-container';
import { Avatar, Button, List, Modal, Skeleton } from 'antd';
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import { ValidStudentMock } from '../../../../modules/students/mocks/valid-student';
import { Student } from '../../../../modules/students/entities/Student';
import { ValidStudentsMock } from '../../../../modules/students/mocks/valid-students';
import { getFullName } from '../../../../shared/utils/getFullName';
import  axiosHttpClient  from '../../../../infra/http/AxiosHttpClient';
interface IScreenNotification {
  title: string;
  student: Student;
  content: string;
  figure: React.ReactNode;
}
// const getNotification = async ():Promise<IScreenNotification[]> => {
  
//   const response = await axiosHttpClient.get('/api/notifications/');
//   console.log(response);
//   const data = response.data as unknown[];
//   return data as IScreenNotification[];
  
// }


// const notifications = getNotification();


export const Notifications: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedNotificationTitle, setSelectedNotificationTitle] = useState<string>();
  const [notifications, setNotifications] = useState<IScreenNotification[]>([]); // Estado para armazenar as notificações

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosHttpClient.get('/api/notifications/');
        console.log(response);
        const data = response.data as IScreenNotification[];
        setNotifications(data);
      } catch (error) {
        throw error;
      }
    };

    fetchNotifications();
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
    if (notification.title === notification.title) {
      showModal(notification.title);
    } else {
      navigate(`/app/chat/${notification.student.id}`);
    }
  };

  return (
    <DashboardContainerComponent>
      <main className={styles.dashboardContent}>
        <h1 className={styles.professionalName}>Notificações</h1>
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          style={{
            width: '100%',
          }}
          renderItem={(item) => (
            <List.Item
              style={{backgroundColor: '#fff', padding: '1.6rem'}}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  title={<p style={{margin: 0}}>{item.title}</p>}
                  description={item.content}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </main>
    </DashboardContainerComponent>
  );
};

import React, { useState, useEffect } from 'react'
import axiosHttpClient from '../../../../infra/http/AxiosHttpClient';
import { AxiosResponse } from 'axios';


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

interface IScreenNotification {
  title: string;
  student: Student;
  figure: React.ReactNode;
}


const notifications = [
  {
    title: `${getFullName(ValidStudentsMock[0])}`,
    student: ValidStudentsMock[0],
    course: 'Ciência da Computação',
    figure: <Avatar src={"https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_1280.jpg"} size={42} />  
  },
  {
    title: `${getFullName(ValidStudentsMock[1])}`,
    student: ValidStudentsMock[1],
    course: 'Engenharia de alimentos',
    figure: <Avatar src={"https://cdn.pixabay.com/photo/2017/07/31/11/04/guy-2557251_1280.jpg"} size={42} />  
  },
  
]

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  type: string;
}

interface IAllChats {
  id: number;
  status: string;
  last_message: string;
  from_user: IUser;
  to_user: IUser;
}

export const Patients: React.FC = () => {
  const [chats, setChats] = useState<IAllChats[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedNotificationTitle, setSelectedNotificationTitle] = useState<string>();
  
  useEffect(() => {
    async function fetchData() {
      const response: AxiosResponse<IAllChats[]> = await makeRequest();
      if(response.data.length > 0){
        setChats(response.data);
        setName(response.data[0].from_user.first_name);
      }
    }
    fetchData();
  }, []);

  async function makeRequest() {
    const url = '/api/chat/';
    const headers = {
      'Content-Type': 'application/json'
    };

    return await axiosHttpClient.get(url);
  }

  const navigate = useNavigate();

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

  const handleNotification = (notification: IAllChats) => {
    console.log(notification.from_user.first_name)
    //navigate(`/app/chat/${notification.student.id}`);
    localStorage.setItem("pacientId", notification.from_user.id.toString());
    localStorage.setItem("pacientSelectedName", notification.from_user.first_name);
    localStorage.setItem("chatID", notification.id.toString());
    navigate(`/app/pacientes/${"6"}`);
 
  };

  return (
    <DashboardContainerComponent>
      <main className={styles.dashboardContent}>
        <h1 className={styles.professionalName}>Chats</h1>
        <List
          itemLayout="horizontal"
          dataSource={chats}
          style={{
            width: '100%',
          }}
          renderItem={(item) => (
            <List.Item
            onClick={() => handleNotification(item)}
            actions={[<p style={{color: '#30D939'}}>Online</p>]}
              style={{backgroundColor: '#fff', padding: '1.6rem', cursor: 'pointer'}}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={<Avatar src={"https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_1280.jpg"} size={42} />}
                  title={<p style={{margin: 0}}>{item.from_user.first_name + " " + item.from_user.last_name}</p>}
                  description="Ciência da Computação"
                />
              </Skeleton>
            </List.Item>
          )}
        
        />
 
      </main>
    </DashboardContainerComponent>
  );
};

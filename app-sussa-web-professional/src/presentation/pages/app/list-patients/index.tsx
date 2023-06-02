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
    "id": 1,
    "first_name": "Estudante",
    "last_name": "User",
    "user": 3,
    "course": 1
},
{
    "id": 2,
    "first_name": "Estudante",
    "last_name": "User",
    "user": 4,
    "course": 1
}
  
]

interface IStudentPatient {
  id: number;
  first_name: string;
  last_name: string;
  course: number;
}

export const Listagem: React.FC = () => {
  const [chats, setChats] = useState<IStudentPatient[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedNotificationTitle, setSelectedNotificationTitle] = useState<string>();
  
  useEffect(() => {
    async function fetchData() {
      const response: AxiosResponse<IStudentPatient[]> = await makeRequest();
      if(response.data.length > 0){
      setChats(response.data);
      setName(response.data[0].first_name);
    }
  }
    fetchData();
  }, []);

  async function makeRequest() {
    const url = '/api/professional/patients/';
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

  const handleNotification = (notification: IStudentPatient) => {
    // console.log(notification.from_user.first_name)
    // //navigate(`/app/chat/${notification.student.id}`);
    // localStorage.setItem("pacientId", notification.from_user.id.toString());
    // localStorage.setItem("pacientSelectedName", notification.from_user.first_name);
    // localStorage.setItem("chatID", notification.id.toString());
    navigate(`/app/pacientes/${notification.id}`);
 
  };

  return (
    <DashboardContainerComponent>
      <main className={styles.dashboardContent}>
        <h1 className={styles.professionalName}>Pacientes</h1>
        <List
          itemLayout="horizontal"
          dataSource={chats}
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
                // TODO MUDAR A FOTO
                  avatar={<Avatar src={"https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_1280.jpg"} size={42} />}
                  title={<p style={{margin: 0}}>{item.first_name + " " + item.last_name}</p>}
                />
              </Skeleton>
            </List.Item>
          )}
        
        />
 
      </main>
    </DashboardContainerComponent>
  );
};

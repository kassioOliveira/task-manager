import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export default function MyDay() {

  const navigate = useNavigate();

  const { user} = useContext(Context);
  const [tasks, setTasks] = useState([]);

  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(true)
  );

  useEffect(() => {

    const getTasks = async () => {

      try {
        const tasksApi = await api.get('/tasks/myday', {
          headers: {
            'authorization': `Bearer ${user.token}`
          }
        });

        setTasks(tasksApi.data.response)
        if(tasksApi.data.response.length){
          setCheckedState(new Array(tasksApi.data.response.length).fill(false));
        }
      } catch (error) {
        if (error?.response.status === 401) {
          localStorage.clear();
          navigate('/login');
          return;
        }
        alert(error?.response?.data?.error);
      }
    }
    getTasks();

  }, [navigate, user.token]);

  return (
    <>
    <Header/>
    <Main TitleName={'Meu Dia'}
    user={user} 
    checkedState={checkedState}
    setCheckedState={setCheckedState}
    tasks={tasks.filter(t => t.my_day === true)}
    setTasks={setTasks}
    bgColor={'blue'}
    isVisisbleInputAdd={true}
    category={{my_day:true}}
    />
    </>
  )
}
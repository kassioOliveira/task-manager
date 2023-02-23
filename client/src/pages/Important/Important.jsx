import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export default function Important() {

  const navigate = useNavigate();

  const { user} = useContext(Context);
  const [tasks, setTasks] = useState([]);

  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(true)
  );

  useEffect(() => {

    const getTasks = async () => {

      try {
        const tasksApi = await api.get('/tasks/important', {
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
    <Main TitleName={'Importantes'}
    user={user} 
    checkedState={checkedState}
    setCheckedState={setCheckedState}
    tasks={tasks.filter(task => task.important === true)}
    setTasks={setTasks}
    bgColor={'#FEDF00'}
    isVisisbleInputAdd={true}
    category={{important:true}}
    />
    </>
  )
}
import React, { useContext, useState, useEffect } from 'react';
import { ArticleContainer, CheckboxInput, DropDownContainer, DropDownListContainer, DropDownListItemContainer, DropDownSubContainer, H1, IconBar, IconTitle, IconTrash, MainComponentStyle, SectionContainer, TaskContainer, TaskName, ThreeDots, TitleContainer, TitleSubContainer } from './mainStyle';
import InputAdd from '../InputAdd/InputAdd';
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api';

export default function Main({TitleName}) {

  const navigate = useNavigate();

  const { user, setMenuVisible } = useContext(Context);
  const [inputAdd, setInputAdd] = useState('');
  const [tasks, setTasks] = useState([]);


  useEffect(() => {

    const getTasks = async () => {

      try {
        const tasks = await api.get('/tasks', {
          headers: {
            'authorization': `Bearer ${user.token}`
          }
        });

        setTasks(tasks.data.response)
      } catch (error) {
        if (error?.response.status === 401) {
          localStorage.clear();
          alert(error?.response?.data?.error);
          navigate('/login');
          return;
        }
        alert(error?.response?.data?.error);
      }
    }
    getTasks();

  }, [navigate, user.token]);


  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }

  const handleInputAdd = (e) => {
    setInputAdd(e.target.value);
  }

  const handleCreateTask = async () => {

    if(!inputAdd){
      alert('Acione o titúlo para sua tarefa!');
      return;
    }

    try {
      const taskResponse = await api.post('/tasks', { title: inputAdd }, {
        headers: {
          'authorization': `Bearer ${user.token}`
        }
      });
      const task = taskResponse?.data?.response
      const newTasks = [...tasks, task]
      setTasks(newTasks)
      setInputAdd('');
    } catch (error) {

      if (error?.response?.status === 401) {
        localStorage.clear();
        alert(error?.response?.data?.error);
        navigate('/login');
        return;
      }
      alert(error?.response?.data?.error);
    }
  }

 const handleDeleteTask = async (id) => {

  if(!id){
    alert("Adicione uma tarefa válida!");
    return;
  }
  window.confirm("Deseja excluir essa tarefa?");
  try {
    const taskResponse = await api.delete(`/tasks/task/${id}`,{
      headers: {
        'authorization': `Bearer ${user.token}`
      }
    });
    const task = taskResponse?.data?.response
    console.log(task)
    setTasks(OldTasks => OldTasks.filter((task) => task._id !== id))

  } catch (error) {
console.log(error)
    if (error?.response?.status === 401) {
      localStorage.clear();
      alert(error?.response?.data?.error);
      navigate('/login');
      return;
    }
    alert(error?.response?.data?.error);
  }
 }

  return (
    <MainComponentStyle color='white'>
      <IconBar onClick={() => setMenuVisible((res) => res === true ? (false) : (true))} />

      <TaskContainer>

        <TitleContainer>
          <TitleSubContainer>
          <IconTitle /> <H1>{TitleName}</H1>
          </TitleSubContainer>
          <DropDownContainer>
            <DropDownSubContainer>
             <DropDownListContainer>
              <DropDownListItemContainer>

              </DropDownListItemContainer>
             </DropDownListContainer>
            </DropDownSubContainer>
          <ThreeDots/>
          </DropDownContainer>
        </TitleContainer>

        <SectionContainer>
          {tasks.length ? (tasks.map((task, index) => (<ArticleContainer key={index}>
            <CheckboxInput name={task?.title}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              type='checkbox' />
            <TaskName>
              {task.title}
            </TaskName>
            <IconTrash onClick={()=> handleDeleteTask(task._id)} />
          </ArticleContainer>))) : (<h1>Suas tarefas serão mostradas aqui caso não estejam em uma lista!</h1>)}

        </SectionContainer>

      </TaskContainer>

      <InputAdd inputAdd={inputAdd}
        handleInputAdd={handleInputAdd}
        handleCreateTask={handleCreateTask} />


    </MainComponentStyle>
  )
}

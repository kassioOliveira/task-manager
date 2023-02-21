import React, { useContext, useState, useEffect } from 'react';
import { ArticleContainer, ButtonIncon, ButtonInconDelete, CheckboxInput, CheckedAllIcon, ContainerButtons, H1, IconBar, IconTitle, IconTrash, MainComponentStyle, SectionContainer, TaskContainer, TaskName, TitleContainer, TitleSubContainer } from './mainStyle';
import InputAdd from '../InputAdd/InputAdd';
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export default function Main({TitleName}) {

  const navigate = useNavigate();

  const { user, setMenuVisible } = useContext(Context);
  const [inputAdd, setInputAdd] = useState('');
  const [tasks, setTasks] = useState([]);
  
  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(true)
  );
  const [allTasksChecked,setAllTasksChecked] = useState(false);
  const [isVisibleCheckbox,setIsVisibleCheckbox] = useState(false);

  useEffect(() => {

    const getTasks = async () => {

      try {
        const tasksApi = await api.get('/tasks', {
          headers: {
            'authorization': `Bearer ${user.token}`
          }
        });

        setTasks(tasksApi.data.response)
        if(tasksApi.data.response.length){
          setCheckedState(new Array(tasksApi.data.response.length).fill(false))
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

  }, [navigate, user.token,]);



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
      const task = taskResponse?.data?.response;
      const newTasks = [...tasks, task]
      setTasks(newTasks)
      if(checkedState.length){
        const newCheckedState = [...checkedState,false];
      setCheckedState(newCheckedState);
      }else{
        setCheckedState([false]);
      }
     
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
    await api.delete(`/tasks/task/${id}`,{
      headers: {
        'authorization': `Bearer ${user.token}`
      }
    });
 
    setTasks(OldTasks => OldTasks.filter((task) => task._id !== id))
const newCheckedState = [...checkedState]
newCheckedState.pop()
setCheckedState(newCheckedState)
  } catch (error) {

    if (error?.response?.status === 401) {
      localStorage.clear();
      navigate('/login');
      return;
    }
    alert(error?.response?.data?.error);
  }
 }

 const handleCheckAllTasks = () => {
 
  setAllTasksChecked(value => value? false:true)
  setIsVisibleCheckbox(value => value? false:true)
  const updatedCheckedState = checkedState.map((item, index) => item === false? true:item);

  setCheckedState(updatedCheckedState)
 
 }

 const handleDeleteManyTasks = async () => {

  if(!tasks.length || !checkedState.length){
    alert("Não existem tarefas para serem excluídas!");
    return;
  }
 
const tasksIdsToDelete = tasks.map((el,i) => checkedState[i] === true && (el))

const filterValues = tasksIdsToDelete
.filter((e) => e !== undefined)
.map(e => e._id);


  try {
    const taskResponse = await api.delete(`/tasks`,{
      headers: {
        'authorization': `Bearer ${user.token}`
      },
    data:{tasks_id:filterValues}
    });
    const task = taskResponse?.data?.response;

    setAllTasksChecked(false);

    const ids = task.map(e => e.deleted &&(e.id))
  const newTasks = tasks.filter(
    (el,indx) => !ids.includes(el._id) && (el)
    )
  setTasks(newTasks)
  setCheckedState(new Array(newTasks.length).fill(false))
  } catch (error) {
    if (error?.response?.status === 401) {
      localStorage.clear();
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
         <ContainerButtons>
         <ButtonInconDelete onClick={handleDeleteManyTasks} selected={allTasksChecked}>
          Excluir
         </ButtonInconDelete>
         <ButtonIncon 
          onClick={handleCheckAllTasks}
          selected={allTasksChecked}>
         <CheckedAllIcon/>
         </ButtonIncon>
         </ContainerButtons>
         
        </TitleContainer>

        <SectionContainer>
          {tasks.length ? (tasks.map((task, index) => (<ArticleContainer key={index}>
            <CheckboxInput name={task?.title}
              checked={checkedState[index]}
             
              onChange={() => handleOnChange(index)}
              type='checkbox' isVisible={isVisibleCheckbox}  />
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

import React, { useContext, useState} from 'react';
import { ArticleContainer, ButtonAdd, ButtonIncon, ButtonInconDelete, CheckBoxCompleted, CheckBoxContainerCicle, CheckboxInput, CheckedAllIcon, CheckedStar, CheckListIcon, Checkmark, ContainerButtons, ContainerDropDownList, H1, IconBar, IconStar, IconTrash, ItemDropDown, MainComponentStyle, SectionContainer, SubContainerDropDown, TaskContainer, TaskName, TaskNameContainer, TitleContainer, TitleSubContainer } from './mainStyle';
import InputAdd from '../InputAdd/InputAdd';
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export default function Main({
  TitleName
  ,user
  ,checkedState
  ,setCheckedState
  ,tasks
  ,setTasks
  ,bgColor
  ,isVisisbleInputAdd
  ,category
}) {

  const navigate = useNavigate();

  const {  setMenuVisible } = useContext(Context);

  const [inputAdd, setInputAdd] = useState('');
  const [allTasksChecked,setAllTasksChecked] = useState(false);
  const [isVisibleCheckbox,setIsVisibleCheckbox] = useState(false);
  const [tasksListChecked,setTasksListChecked] = useState(false);
  const [showDropDown,setShowDropDown] = useState(false);
 

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
    let data = {title:inputAdd}
    if(category){
      if(category.important){
        data.important = category.important;
      }
      if(category.my_day){
        data.my_day = category.my_day;
      }
    }

    try {
      const taskResponse = await api.post('/tasks',data, {
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
  setIsVisibleCheckbox(false);
  } catch (error) {
    if (error?.response?.status === 401) {
      localStorage.clear();
      navigate('/login');
      return;
    }
    alert(error?.response?.data?.error);
  }


 }

 const handleCompleted = async (id,taskCompleted) => {

if(!id){
  alert('Id inválido!')
  return;
}
const data = {completed:!taskCompleted}


try {
 await api.put(`/tasks/task/${id}`,data,{
    headers: {
      'authorization': `Bearer ${user.token}`
    }
  });

  const OldTasks = tasks.map(
    (task) => {
      if(task._id === id){
        task.completed = !task.completed
        return task
      }
      return task
    }
    )

setTasks(OldTasks)
} catch (error) {

  if (error?.response?.status === 401) {
    localStorage.clear();
    navigate('/login');
    return;
  }
  alert(error?.response?.data?.error);
}
 }

 const handleImportant = async (id,taskImportant) => {

if(!id){
  alert('Id inválido!')
  return;
}
const data = {important:!taskImportant}


try {
 await api.put(`/tasks/task/${id}`,data,{
    headers: {
      'authorization': `Bearer ${user.token}`
    }
  });

  const OldTasks = tasks.map(
    (task) => {
      if(task._id === id){
        task.important = !task.important
        return task
      }
      return task
    }
    )

setTasks(OldTasks)
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
    <MainComponentStyle bg={bgColor}>
      <IconBar onClick={() => setMenuVisible((res) => res === true ? (false) : (true))} />

      <TaskContainer>

        <TitleContainer>
          <TitleSubContainer>
           <H1>{TitleName}</H1>
          </TitleSubContainer>
         <ContainerButtons>
         <ButtonInconDelete onClick={handleDeleteManyTasks} selected={allTasksChecked}>
          Excluir
         </ButtonInconDelete>
         <ButtonAdd selected={allTasksChecked} 
          listselected={{tasksListChecked}}
          onClick={()=> setShowDropDown((value) => !value)}/>
         <ButtonIncon 
          onClick={handleCheckAllTasks}
          selected={allTasksChecked} 
          listSelected={tasksListChecked}>
           
         <CheckedAllIcon />
         </ButtonIncon>
         <CheckListIcon selected={allTasksChecked}
          listselected={{tasksListChecked}}
          onClick={()=> setTasksListChecked((value) => !value)}
          />
         <ContainerDropDownList drop={showDropDown}>
          <SubContainerDropDown>
            <ItemDropDown>
              Lista
            </ItemDropDown>
            <ItemDropDown>
              Lista
            </ItemDropDown>
            <ItemDropDown>
              Lista
            </ItemDropDown>
            <ItemDropDown>
              Lista
            </ItemDropDown>
            <ItemDropDown>
              Lista
            </ItemDropDown>
          </SubContainerDropDown>
         </ContainerDropDownList>
         </ContainerButtons>
         
        </TitleContainer>

        <SectionContainer>
          {tasks.length ? (tasks.map((task, index) => (<ArticleContainer key={index}>
            {
              !task.important?(<IconStar onClick={()=>handleImportant(task._id,task.important)}/>)
              :(<CheckedStar onClick={()=>handleImportant(task._id,task.important)}/>)
            }
            
            <CheckBoxContainerCicle isVisible={isVisibleCheckbox}>
            <CheckBoxCompleted type='checkbox'
            checked={task.completed}  value={task.completed} onChange={ () => handleCompleted(task._id,task.completed)}/>
            <Checkmark/>
            </CheckBoxContainerCicle>
            <TaskNameContainer>
            <TaskName>
            {task.title}
            </TaskName>
            </TaskNameContainer>
            <IconTrash  onClick={()=> handleDeleteTask(task._id)}
             isvisible={{isVisibleCheckbox}} />
            <CheckboxInput name={task?.title}
              checked={checkedState[index]}
              value={checkedState[index]}
              onChange={() => handleOnChange(index)}
              type='checkbox' isVisible={isVisibleCheckbox}  />
          </ArticleContainer>))) : (<h1>Suas tarefas serão mostradas aqui caso não estejam em uma lista!</h1>)}

        </SectionContainer>

      </TaskContainer>

      {
        isVisisbleInputAdd === true && (
          <InputAdd inputAdd={inputAdd}
        handleInputAdd={handleInputAdd}
        handleCreateTask={handleCreateTask} />
        )
      }


    </MainComponentStyle>
  )
}

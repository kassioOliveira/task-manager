import React, { useContext, useState} from 'react';
import {RemoveFromListIcon, ArticleContainer, BoxContainer, BoxCreateList, ButtonAdd, ButtonBox, ButtonDropDownCreateList, ButtonIncon, ButtonInconDelete, CheckBoxCompleted, CheckBoxContainerCicle, CheckboxInput, CheckedAllIcon, CheckedStar, CheckListIcon, Checkmark, CloseBox, ContainerButtons, ContainerDropDownList, H1, IconBar, IconStar, IconTrash, InputBox, ItemDropDown, MainComponentStyle, SectionContainer, SubContainerDropDown, TaskContainer, TaskName, TaskNameContainer, TitleBox, TitleContainer, TitleSubContainer, ButtonRemoveFromList } from './mainStyle';
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
  ,lists
  ,setLists
  ,setTasks
  ,bgColor
  ,isVisisbleInputAdd
  ,category
  ,isList 
  ,param
}) {

  const navigate = useNavigate();

  const {  setMenuVisible } = useContext(Context);

  const [inputAdd, setInputAdd] = useState('');
  const [allTasksChecked,setAllTasksChecked] = useState(false);
  const [isVisibleCheckbox,setIsVisibleCheckbox] = useState(false);
  const [tasksListChecked,setTasksListChecked] = useState(false);
  const [showDropDown,setShowDropDown] = useState(false);
  const [showBox,setShowBox] = useState(false);
  const [inputListName,setInputListName] = useState('');
 

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

 const handleCheckALlTasksToList = () => {
  const updatedCheckedState = checkedState.map((item, index) => item === false? true:item);
  setCheckedState(updatedCheckedState);
  setTasksListChecked((value) => !value)
 }

 const handleDeleteManyTasks = async () => {

  if(!tasks.length || !checkedState.length){
    alert("Não existem tarefas para serem excluídas!");
    return;
  }
 
const tasksIdsToDelete = tasks.map((el,i) => checkedState[i] === true && (el))

const filterValues = tasksIdsToDelete
.map(e => e._id).filter((e) => e !== undefined)


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

 const handleRemoveManyTasksFromList = async () => {
  if(!tasks.length || !checkedState.length){
    alert("Não existem tarefas para serem excluídas!");
    return;
  }
 
const tasksIdsToDelete = tasks.map((el,i) => checkedState[i] === true && (el))

const filterValues = tasksIdsToDelete
.map(e => e._id).filter((e) => e !== undefined)

if(!param){
alert("Lista inválida!");
return;
}

  try {
    const taskResponse = await api.put(`/list/tasks/${param}`,{tasks_ids:filterValues},{
      headers: {
        'authorization': `Bearer ${user.token}`
      }
    });
    const task = taskResponse?.data?.response;
console.log(task)
    setAllTasksChecked(false);

  const newTasks = tasks.filter(
    (el,indx) => !filterValues.includes(el._id) && (el)
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

 const handleRemoveTaskFromList = async (id) => {
  if(!id){
    alert('Id inválido!');
    return;
  }

  try {
   await api.put(`/list/task/${param}/${id}`,{
      headers: {
        'authorization': `Bearer ${user.token}`
      }
    });
  
    const OldTasks = tasks.filter((task) => task._id !== id)
  
   setTasks(OldTasks)
  const newCheckedState = [...checkedState]
  newCheckedState.pop()
  setCheckedState(newCheckedState)
  } catch (error) {
  console.log(error)
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

 const handleCreateList = async () => {
   if(!inputListName){
      alert('Adicione o titúlo á sua lista!');
      return;
    }
    let data = {name:inputListName}

    try {
    await api.post('/list',data, {
        headers: {
          'authorization': `Bearer ${user.token}`
        }
      });
    
  setInputListName('');
  setShowBox(false);
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

 const handleAddTaskToList = async (listId) => {

  if(!tasks.length || !checkedState.length){
    alert("Não existem tarefas para serem á lista!");
    return;
  }
 
const tasksIdsToAdd = tasks.map((el,i) => checkedState[i] === true && (el))

const filterValues = tasksIdsToAdd
.map(e => e._id).filter((e) => e !== undefined)

  try {
    const taskResponse = await api.put(`/list/${listId}`,{tasks_ids:filterValues},{
      headers: {
        'authorization': `Bearer ${user.token}`
      }
    });
    const task = taskResponse?.data?.response;
    console.log(task)
    setAllTasksChecked(false);
    setIsVisibleCheckbox(false);
  } catch (error) {
    console.log(error)
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
         <ButtonRemoveFromList onClick={handleRemoveManyTasksFromList} isList={{isList}} selected={allTasksChecked}>
          Remover
         </ButtonRemoveFromList>
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
          onClick={handleCheckALlTasksToList}
          />
         <ContainerDropDownList drop={showDropDown}
          listselected={tasksListChecked}>
          <SubContainerDropDown>
            {
              lists? lists.map(list => {
                return (
                  <ItemDropDown key={list._id}
                  onClick={()=>handleAddTaskToList(list._id)}>
                {list.name}
              </ItemDropDown>
                )
              }):(
                <ButtonDropDownCreateList onClick={() => setShowBox(value => !value)}>
                  +
                </ButtonDropDownCreateList>
              )
            }
           
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
             <RemoveFromListIcon onClick={()=>handleRemoveTaskFromList(task._id)}
              islist={{isList}} isvisible={{isVisibleCheckbox}} listselected={{tasksListChecked}} />
            <CheckboxInput name={task?.title}
              checked={checkedState[index]}
              value={checkedState[index]}
              onChange={() => handleOnChange(index)}
              type='checkbox'  isVisible={isVisibleCheckbox} 
              listselected={tasksListChecked}
              />
          </ArticleContainer>))) : (<h1>Suas tarefas serão mostradas aqui!</h1>)}

        </SectionContainer>

      </TaskContainer>

      {
        isVisisbleInputAdd === true && (
          <InputAdd inputAdd={inputAdd}
        handleInputAdd={handleInputAdd}
        handleCreateTask={handleCreateTask} />
        )
      }

      <BoxContainer isBoxVisible={showBox}>
        <BoxCreateList>
          <CloseBox onClick={()=> setShowBox(value => !value)}/>
          <TitleBox>
            Nome da lista
          </TitleBox>
          <InputBox value={inputListName} 
          onChange={(e) => setInputListName(e.target.value)} type='text'/>
          <ButtonBox onClick={handleCreateList}>
            Criar
          </ButtonBox>
        </BoxCreateList>
      </BoxContainer>


    </MainComponentStyle>
  )
}

import React,{useContext,useState,useEffect} from 'react';
import { ArticleContainer, CheckboxInput, H1, IconBar, IconTitle, IconTrash, MainComponentStyle, SectionContainer, TaskContainer, TaskName, TitleContainer } from './mainStyle';
import InputAdd from '../InputAdd/InputAdd';
import { Context } from '../../Hooks/Contexts'

import { api } from '../../services/api';

export default function Main() {

  const {user,setMenuVisible} = useContext(Context);
  const [messageError,setMessageError] = useState({});
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{

    const getTasks = async () => {
      
      try {
        const tasks = await api.get('/tasks',{
          headers: {
            'authorization': `Bearer ${user.token}`
          }
        });

      setTasks(tasks.data.response)
         } catch (error) {
           setMessageError({serverError:error?.response?.data?.error})
         }
    }
    getTasks();
 
  },[])

  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item,index) =>
    index === position ? !item :item
    );

    setCheckedState(updatedCheckedState);
  }

  return (
    <MainComponentStyle color='white'>
<IconBar onClick={ ()=> setMenuVisible((res)=> res === true? (false):(true))} />
   
   { !messageError?.serverError ? (
    <>
<TaskContainer>

<TitleContainer>
  <IconTitle/> <H1>Meu Dia</H1>
 </TitleContainer>

<SectionContainer>
 {tasks.map((task,index) => (<ArticleContainer key={index}>
<CheckboxInput name={task?.title}
checked={checkedState[index]}
onChange={() => handleOnChange(index)}
type='checkbox'/>
<TaskName>
{task.title}
</TaskName>
<IconTrash/>
</ArticleContainer>))}

</SectionContainer>

</TaskContainer>

<InputAdd/>
</>

   ): <h1>{messageError?.serverError}</h1>}
     
    </MainComponentStyle>
  )
}

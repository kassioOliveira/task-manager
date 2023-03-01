import React, {useState, useEffect, useContext} from 'react'
import { CheckBox, CheckBoxContainer, CheckBoxItem, CloseEdit, ConfirmButton, InputDescription, InpuTitle, ItemContainer, ItemSubContainer, LabelDescription, LabelTitle, ListEdit, Option, SelectValue } from './ItemEditStyle'

import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export default function ItemEdit({isTask,isEditable,
    currentTask,lists,setIsEditable, tasks, setTasks}) {

        const navigate = useNavigate();

        const { user} = useContext(Context);

    const [OptionValue, setOptionValue] = useState('');
    const [task,setTask] = useState({});
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [important,setImpotant] = useState(false);
    const [completed,setCompleted] = useState(false);
    const [myDay,setMyDay] = useState(false);

    const [listName, setListName] = useState('');

    useEffect(() => {

        const getTasks = async () => {
    
          try {
            const tasksApi = await api.get(`/tasks/task/${currentTask}`, {
              headers: {
                'authorization': `Bearer ${user.token}`
              }
            });
    const taskRes = tasksApi.data.response;
            setTask(tasksApi.data.response)
            setTitle(taskRes.title);
            setDescription(taskRes.description);
            setCompleted(taskRes.completed);
            setImpotant(taskRes.important);
            setMyDay(taskRes.my_day);
            setOptionValue(taskRes.list_id)
            // if(tasksApi.data.response.length){
            //   setCheckedState(new Array(tasksApi.data.response.length).fill(false));
            // }
            
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
    
      }, [navigate, user.token,currentTask]);

      const handleUpdateTask = async (e) => {
       e.preventDefault();

          const newTask = task;
          newTask.important = important;
          newTask.my_day = myDay;
          newTask.completed = completed
          newTask.title = title;
          newTask.description = description;
          newTask.list_id = OptionValue;
          
          try {
           await api.put(`/tasks/task/${task._id}`,newTask,{
              headers: {
                'authorization': `Bearer ${user.token}`
              }
            });
          
            const OldTasks = tasks.filter( (t) =>  t._id !== task._id) 
            const newTasks = [...OldTasks,newTask]
          
          setTasks(newTasks);
          setIsEditable(false);
          } catch (error) {
          
            if (error?.response?.status === 401) {
              localStorage.clear();
              navigate('/login');
              return;
            }
            alert(error?.response?.data?.error);
          }
      }

      const handleUpdateList = async (e) => {
        e.preventDefault();

        const newTask = task;
        newTask.important = important;
        newTask.my_day = myDay;
        newTask.completed = completed
        newTask.title = title;
        newTask.description = description;
        newTask.list_id = OptionValue;
        
        try {
         await api.put(`/tasks/task/${task._id}`,newTask,{
            headers: {
              'authorization': `Bearer ${user.token}`
            }
          });
        
          const OldTasks = tasks.filter( (t) =>  t._id !== task._id) 
          const newTasks = [...OldTasks,newTask]
        
        setTasks(newTasks);
        setIsEditable(false);
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
    <ItemContainer isEditable={isEditable}>
        <CloseEdit onClick={() => setIsEditable(v => v = false)}/>
       {isTask?( <ItemSubContainer onSubmit={handleUpdateTask}>
            <LabelTitle>
                Titulo
                <InpuTitle value={title}
                onChange={(e)=> setTitle(e.target.value)} type='text' name='title'/>
            </LabelTitle>
            <LabelDescription>
                Descrição
                <InputDescription value={description}
                onChange={(e)=> setDescription(e.target.value)} name='description'/>
            </LabelDescription>
            <CheckBoxContainer>
                <CheckBoxItem>
                    <CheckBox checked={completed}
                    onChange={() => setCompleted(v => !v)} type='checkbox'/>
                    Completa
                </CheckBoxItem>
                <CheckBoxItem>
                    <CheckBox checked={important}
                    onChange={() => setImpotant(v => !v)} type='checkbox'/>
                    Importante
                </CheckBoxItem>
                <CheckBoxItem>
                    <CheckBox checked={myDay}
                    onChange={() => setMyDay(v => !v)} type='checkbox'/>
                    Meu dia
                </CheckBoxItem>
            </CheckBoxContainer>

            <SelectValue vl={OptionValue} value={OptionValue}
             onChange={(e)=> setOptionValue(e.target.value)} >
            {lists?.length > 0 ? (
                lists.map(li => (<Option key={li._id} value={`${li._id}`}>{li.name}</Option>))
            ): ('Vazio')}
            <Option cl={'gray'} value={``} checked >Sem Lista</Option>
            </SelectValue>
            <ConfirmButton type='submit'>
                Confirmar
            </ConfirmButton>
        </ItemSubContainer>):(

            <ListEdit>
                <LabelTitle>
                    Nome
                    <InpuTitle type='text'/>
                   
                </LabelTitle>
                <ConfirmButton>
                        Confirmar
                    </ConfirmButton>
            </ListEdit>
        )}
    </ItemContainer>
  )
}

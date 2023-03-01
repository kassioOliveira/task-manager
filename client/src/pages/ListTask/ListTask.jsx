import React,{useEffect, useState, useContext} from 'react'
import Header from '../../components/Header/Header'
import { Context } from '../../Hooks/Contexts';

import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import Main from '../../components/Main/Main';

export default function ListTask() {

    const {user} = useContext(Context);
    const navigate = useNavigate();
    const {listaId} = useParams();

const [tasks,setTasks] = useState([]);
const [lists,setLists] = useState([]);

const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(true)
  );

    useEffect(() => {

        const getTasks = async () => {
    
          try {
            const tasksApi = await api.get(`/list/tasks/${listaId}`, {
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
    
      }, [navigate, user.token,listaId])

      useEffect(() => {

        const getLists = async () => {
    
          try {
            const listsApi = await api.get('/list', {
              headers: {
                'authorization': `Bearer ${user.token}`
              }
            });
    
            setLists(listsApi.data.response);
          } catch (error) {
            if (error?.response.status === 401) {
              localStorage.clear();
              navigate('/login');
              return;
            }
            alert(error?.response?.data?.error);
          }
        }
        getLists();
    
      }, [navigate, user.token])
    
    const listName = lists.filter(li => li._id === listaId).map(li => li.name)
     
  return (
   <>
   <Header/>
   <Main TitleName={listName[0]}
    user={user} 
    checkedState={checkedState}
    setCheckedState={setCheckedState}
    tasks={tasks}
    lists={lists}
    setLists={setLists}
    setTasks={setTasks}
    bgColor={'red'}
    isList={true}
    param={listaId}
    />
   </>
  )
}

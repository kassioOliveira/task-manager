import React, {useState,useEffect,useContext} from 'react'
import { MainComponent, ListContainer, TitleContainer, TitleSubContainer, H1, ButtonIncon, CheckedAllIcon, ButtonInconDelete, ContainerButtons, SectionContainer, ArticleContainer,IconTrash, CheckboxInput, IconBar, ListNameContainer, ListName } from './ListStyle'
import InputAdd from '../../components/InputAdd/InputAdd';
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import Header from '../../components/Header/Header';

export default function List() {

    const {user, setMenuVisible} = useContext(Context);

    const navigate = useNavigate();

    const [inputListName,setInputListName] = useState('');
    const [lists,setLists] = useState([]);
    const [allListsChecked,setAllListsChecked] = useState(false);
    const [isVisibleCheckbox,setIsVisibleCheckbox] = useState(false);
    const [checkedState, setCheckedState] = useState(
      new Array(lists.length).fill(true)
    );
    
    useEffect(() => {

        const getLists = async () => {
    
          try {
            const listsApi = await api.get('/list', {
              headers: {
                'authorization': `Bearer ${user.token}`
              }
            });
    
            setLists(listsApi.data.response);
            if(listsApi.data.response.length){
              setCheckedState(new Array(listsApi.data.response.length).fill(false));
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
        getLists();
    
      }, [navigate, user.token]);
    
      const handleInputAdd = (e) => {
        setInputListName(e.target.value);
      }

      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
      }
      const handleCheckAllLists = () => {
 
        setAllListsChecked(value => value? false:true)
        setIsVisibleCheckbox(value => value? false:true)
        const updatedCheckedState = checkedState.map((item, index) => item === false? true:item);
      
        setCheckedState(updatedCheckedState)
       
       }

    const handleCreateList = async () => {
        if(!inputListName){
           alert('Adicione o titúlo á sua lista!');
           return;
         }
         let data = {name:inputListName}
     
         try {
           const listResponse = await api.post('/list',data, {
             headers: {
               'authorization': `Bearer ${user.token}`
             }
           });
           const list = listResponse?.data?.response;
       const newList = [...lists,list];
       setLists(newList);
       if(checkedState.length){
        const newCheckedState = [...checkedState,false];
      setCheckedState(newCheckedState);
      }else{
        setCheckedState([false]);
      }
       setInputListName('');
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
      const handleDeleteList = async (id) => {

        if(!id){
          alert("Adicione uma tarefa válida!");
          return;
        }
        window.confirm("Deseja excluir essa tarefa?");
        try {
          await api.delete(`/list/${id}`,{
            headers: {
              'authorization': `Bearer ${user.token}`
            }
          });
       
          setLists(OldLists => OldLists.filter((list) => list._id !== id))
    // //   const newCheckedState = [...checkedState]
    // //   newCheckedState.pop()
    //   setCheckedState(newCheckedState)
        } catch (error) {
      
          if (error?.response?.status === 401) {
            localStorage.clear();
            navigate('/login');
            return;
          }
          alert(error?.response?.data?.error);
        }
    }

    const handleDeleteManyLists = async () => {

      if(!lists.length || !checkedState.length){
        alert("Não existem tarefas para serem excluídas!");
        return;
      }
     
    const listsIdsToDelete = lists.map((el,i) => checkedState[i] === true && (el))
    
    const filterValues = listsIdsToDelete
    .map(e => e._id).filter((e) => e !== undefined)
    
    
      try {
        const listResponse = await api.delete(`/list/lists`,{
          headers: {
            'authorization': `Bearer ${user.token}`
          },
        data:{list_ids:filterValues}
        });
        const listRes = listResponse?.data?.response;
    
        

    
        const ids = listRes.map(e => e.deleted &&(e.id))
      const newLists = lists.filter(
        (el,indx) => !ids.includes(el._id) && (el)
        )
      setLists(newLists)
      setAllListsChecked(false);
      setIsVisibleCheckbox(false)
      setCheckedState(new Array(newLists.length).fill(false))
      
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
   <>
   <Header/>
    <MainComponent>
    <IconBar onClick={() => setMenuVisible((res) => res === true ? (false) : (true))} />

        <ListContainer>
            <TitleContainer>
                <TitleSubContainer>
                    <H1>Listas</H1>
                </TitleSubContainer>
                <ContainerButtons>
                <ButtonInconDelete onClick={handleDeleteManyLists} selected={allListsChecked} >
                        Excluir
                    </ButtonInconDelete>

                    <ButtonIncon  onClick={handleCheckAllLists}
          selected={allListsChecked} >
                    
                    <CheckedAllIcon/>
                </ButtonIncon>
                </ContainerButtons>
                
            </TitleContainer>
            <SectionContainer>
                
            {lists? lists.map((list,index) => {
                return(
                    <ArticleContainer key={list._id}>
            <ListNameContainer>
                    <ListName to={`/listas/${list._id}`}>
                       {list.name}
                    </ListName>
                </ListNameContainer>
                <IconTrash onClick={()=>handleDeleteList(list._id)}
                isvisible={{isVisibleCheckbox}}/>
                <CheckboxInput type='checkbox'
                checked={checkedState[index]}
                value={checkedState[index]}
                onChange={() => handleOnChange(index)}
                 isVisible={isVisibleCheckbox} 
                />
            </ArticleContainer>
                )
            }):(<h1>Sem Listas</h1>)}

            </SectionContainer>
        </ListContainer>
        <InputAdd inputAdd={inputListName}
        handleInputAdd={handleInputAdd}
        handleCreateTask={handleCreateList} />
    </MainComponent>
   </>
  )
}

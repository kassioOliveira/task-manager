import React, { createContext, useEffect, useState} from "react";
import { api } from "../services/api";


export const Context = createContext(null);

const ContextProvider = ({ children }) => {


    const [menuVisible,setMenuVisible] = useState(false);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const loadingStoreData =  () => {
            const storeToken = localStorage.getItem('@Auth:token');
            const storeUser = localStorage.getItem('@Auth:user');
    
            if(storeToken && storeUser){
                setUser(JSON.parse(storeUser));
            }
        }

       loadingStoreData();
    },[]);

    const signIn = async (email,password) =>{

       try {
        const response = await api.post('/user/login',{email,password})

        const { token } = response.data.response;

        localStorage.setItem('@Auth:token',JSON.stringify(token));
        localStorage.setItem('@Auth:user',JSON.stringify(response.data.response));

       setUser(response.data.response);
       

        api.defaults.headers.common[
            "authorization"
        ] = `Bearer ${response.data.response.token}`;
       } catch (error) {
     throw new  Error(error.response.data.error);
       }
    }

  

    return (
        <Context.Provider value={{
            menuVisible,setMenuVisible,
            user,signed: !!user,
            signIn
            }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
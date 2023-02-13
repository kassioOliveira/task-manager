import React, { createContext, useState, useRef} from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {

    const [menuVisible,setMenuVisible] = useState(true)
    const sideBar = useRef(0);

    return (
        <Context.Provider value={{menuVisible,setMenuVisible,sideBar}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
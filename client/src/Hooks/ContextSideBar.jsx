import React, { createContext, useRef} from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {

    const openSide = useRef(0);

    return (
        <Context.Provider value={{openSide}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
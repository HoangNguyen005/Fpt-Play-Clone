import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext() 

export const GlobalProvider = ({children}) => {
    const [history, setHistory] = useState([])
    return ( 
        <GlobalContext.Provider value={[history, setHistory]}>
            {children}
        </GlobalContext.Provider>  // Provider value is passed to child components via props.
     );
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
}


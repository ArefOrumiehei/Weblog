import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const DarkModeContext = createContext()

const DarkModeProvider = ({children}) => {

    const [darkMode , setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)
    
    useEffect(() => {
        localStorage.setItem('darkMode' , darkMode)
    }, [darkMode])

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{darkMode , toggle}}>
            {children}
        </DarkModeContext.Provider>
    );
};

DarkModeProvider.propTypes = {
    children : PropTypes.any
}

export default DarkModeProvider;
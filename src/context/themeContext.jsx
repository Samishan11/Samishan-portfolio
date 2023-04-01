import { useState, createContext } from "react";

export const ThemeContext = createContext()
export const ThemeProvider = (props) => {
    const [darktheme, setDarkTheme] = useState(true);
   
    return (
        <ThemeContext.Provider value={{darktheme, setDarkTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
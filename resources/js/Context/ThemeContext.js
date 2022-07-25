import React from "react";

// using the react createContext hook for theme switch logic. Using the Context hook allows us to set the data at a global level so I don't need to worry about inheritance
export const ThemeContext = React.createContext();

export default ({ children }) => {
    //
    const [theme, setTheme] = React.useState("dark");

    const defaultContext = {
        theme,
        setTheme,
    };
    return (
        <ThemeContext.Provider value={defaultContext}>
            {children}
        </ThemeContext.Provider>
    );
};

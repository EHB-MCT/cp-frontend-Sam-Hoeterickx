import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return <button>Theme: {theme}</button>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}
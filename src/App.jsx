import './App.css';
import React, { useState, createContext } from 'react';
import ToggleTheme from './components/ToggleTheme';
import Main from './components/Main';

export const ThemeContext = createContext();

function App() {

  const themes = {
    light: {
      background: "#fff",
      color: "#000",
    },
    dark: {
      background: "#171717",
      color: "#fff"
    }
  };

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light': 'dark');
  }

  const providerValue = {
    details: {
      name: theme,
      styles: themes[theme],
    },
    toggleTheme,
  }

  return (
    <>
      <div className={`theme-${theme} simple-star-wars-characters-list-app`}>
        <ThemeContext.Provider value={providerValue}>
          <ToggleTheme/>
          <div className="container">
            <Main />
          </div>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;

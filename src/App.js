import React from 'react';
import { ThemeProvider } from 'mui-styles';
import { createTheme } from '@mui/material/styles';
import { red } from 'mui-colors';
import NavBar from './components/Navbar/Navbar';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <KanbanBoard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
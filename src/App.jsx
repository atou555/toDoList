/* eslint-disable */
import { ThemeProvider } from 'mui-styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <div className="app__body">
            <SideBar />
            <KanbanBoard />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

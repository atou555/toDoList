/* eslint-disable */
import React, { useState } from 'react';
import { makeStyles } from 'mui-styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './SideBar.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchButton: {
    marginRight: theme.spacing(1),
  },
}));

function Sidebar({ columns, setColumns, addTask }) {
  const classes = useStyles();
  const [showTask, setShowTask] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem('isUserLoggedIn') === 'true',
  );
  const [username, setUsername] = useState(
    localStorage.getItem('username') || '',
  );
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: Add login logic here
    localStorage.setItem('isUserLoggedIn', 'true');
    localStorage.setItem('username', username);
    setIsUserLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('username');
    setIsUserLoggedIn(false);
  };

  return (
    <div className={`${classes.root} sidebar`}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="search">
            <TextField
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              variant="outlined"
              placeholder="Rechercher"
              size="small"
              className={classes.searchInput}
            />
            <IconButton className={classes.searchButton}>
              <SearchIcon />
            </IconButton>
          </ListItem>
          <ListItem button key="connexion" onClick={() => setShowTask(!showTask)}>
            {isUserLoggedIn ? (
              <Button onClick={handleLogout}>Déconnexion</Button>
            ) : (
              <ListItemText primary="Connexion" />
            )}
          </ListItem>
        </List>
      </Drawer>
      <Drawer anchor="right" open={showTask} onClose={() => setShowTask(false)}>
        <form onSubmit={handleLogin}>
          <List>
            <ListItem>
              <TextField
                label="Nom d'utilisateur"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </ListItem>
            <ListItem>
              <Button type="submit">Connexion</Button>
            </ListItem>
          </List>
        </form>
      </Drawer>
    </div>
  );
}

export default Sidebar;

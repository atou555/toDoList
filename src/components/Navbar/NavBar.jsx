/* eslint-disable */

import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import {
  Menu, Home, Work, Info, EventNote,
} from '@mui/icons-material';
import './NavBar.css';
import logo from '../../assets/images/logo.png';

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { icon: <Home />, text: 'Home' },
    { icon: <Work />, text: 'My work' },
    { icon: <EventNote />, text: 'Blog' },
    { icon: <Info />, text: 'About me' },
  ];

  return (
    <AppBar position="fixed" className="navbar" color="inherit">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
        <Typography variant="h6" className="navbar-logo">
          <img src={logo} alt="My logo" className="navbar-logo" style={{ width: '50px', height: 'auto' }} />
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List color="inherit">
          {menuItems.map((item, index) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} className="list-item-text" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;

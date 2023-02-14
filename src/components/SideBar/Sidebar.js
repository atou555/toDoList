import React, { useState } from 'react';
import { makeStyles } from 'mui-styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './SideBar.css';
import ColumnsComponent from '../KanbanBoard/Columnscomponent/ColumnsComponent';
import TaskComponent from '../KanbanBoard/Taskcomponent/TaskComponent';


const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerOpen: {
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: theme.mixins.toolbar
}));

function Sidebar({ columns, setColumns, addTask }) {
  const classes = useStyles();
  const [showConfiguration, setShowConfiguration] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [deleteTask, setDeleteTask] = useState([]);
  const [editTask, setEditTask] = useState([]);


  return (
    // add parameters Kanban with the crud to the tasks
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerOpen
      }}
    >
      <div className={classes.toolbar} />
      {/* put in top of add a title called parameters kanban */}
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Parameters Kanban">
          <ListItemIcon>Parameters Kanban</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Tasks" onClick={() => setShowTask(!showTask)}>
          <ListItemIcon>Tasks</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      {showTask && (
      // pass the props  tasks, setTasks, deleteTask, editTask in the component TaskComponent
        <TaskComponent tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} editTask={editTask} />
      )}
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Users">
          <ListItemIcon>Users</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Roles">
          <ListItemIcon>Roles</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Permissions">
          <ListItemIcon>Permissions</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Settings">
          <ListItemIcon>Settings</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Logout">
          <ListItemIcon>Logout</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Help">
          <ListItemIcon>Help</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="About">
          <ListItemIcon>About</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Contact">
          <ListItemIcon>Contact</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Terms">
          <ListItemIcon>Terms</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Privacy">
          <ListItemIcon>Privacy</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper'
        }}
      >
        <ListItem button key="Cookies">
          <ListItemIcon>Cookies</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Add" onClick={() => setShowConfiguration(!showConfiguration)}>
          <ListItemIcon>Add</ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      {showConfiguration && <ColumnsComponent columns={columns} setColumns={setColumns} addTask={addTask} />}


    </Drawer>
  )
}

export default Sidebar;


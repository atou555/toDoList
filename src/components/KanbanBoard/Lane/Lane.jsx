import React, { useState } from 'react';
import Task from '../Task/Task';
import AddTaskForm from '../../AddTaskForm/AddTaskForm';
import { Droppable } from 'react-beautiful-dnd';
import { fetchAllTasks  } from '../../../utils/api';
import './Lane.css';

function Lane(props) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState(props.tasks);

  const handleShowForm = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDeleted = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  const handleTaskUpdated = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleProjectChange = async (projectId) => {
    const newTasks = await fetchAllTasks(projectId);
    setTasks(newTasks);
    props.onProjectChange(projectId);
  };

  return (
    <Droppable droppableId={props.id}>
      {(provided) => (
        <div
          className="lane-body"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              setTasks={setTasks}
              onTaskDeleted={handleTaskDeleted}
              onTaskUpdated={handleTaskUpdated}
              onProjectChange={handleProjectChange}
            />
          ))}
          {provided.placeholder}
          <div className="add-task-form-container">
            {!showAddForm && (
              <button className="add-task-button" onClick={handleShowForm}>
                + Ajouter une tâche
              </button>
            )}
            {showAddForm && (
              <AddTaskForm
                onTaskAdded={handleTaskAdded}
                onCloseForm={handleCloseForm}
                projectId={props.projectId}
              />
            )}
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default Lane;

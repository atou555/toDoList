import React, { useState } from 'react';
import { createTask } from '../../utils/api';
import './AddTaskForm.css';

function AddTaskForm(props) {
  const [content, setContent] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = {
      content,
      due: dueDate ? new Date(dueDate).toISOString() : null,
      project_id: props.projectId,
    };
    const newTask = await createTask(taskData);
    props.onTaskAdded(newTask);
    setContent('');
    setDueDate('');
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleClose = () => {
    props.onCloseForm();
  };

  return (
    <div className="add-task-form">
      <div className="form-header">
        <div className="form-title">Ajouter une tâche</div>
        <button className="close-button" onClick={handleClose}>
          x
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="content">Contenu</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Date d'échéance</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <button className="add-task-button" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;

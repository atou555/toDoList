import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { updateTask } from '../../utils/api';
import 'react-datepicker/dist/react-datepicker.css';
import './EditTaskForm.css';

function EditTaskForm(props) {
  const { task, onCloseForm, onTaskUpdated, onProjectChange } = props;
  const [content, setContent] = useState(task.content);
  const [due, setDue] = useState(task.due ? new Date(task.due.date) : null);
  const [projectId, setProjectId] = useState(task.project_id);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDueChange = (date) => {
    setDue(date);
  };

  const handleProjectChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const updatedTask = { ...task, content, due: due ? due.toISOString() : null, project_id: projectId };
    const isSuccess = await updateTask(updatedTask);
    if (isSuccess) {
      onTaskUpdated(updatedTask);
      if (projectId !== task.project_id) {
        onProjectChange(projectId);
      }
      onCloseForm();
    }
  };

  return (
    <form className="edit-task-form" onSubmit={handleFormSubmit}>
      <label>
        Tâche
        <input type="text" value={content} onChange={handleContentChange} />
      </label>
      <label>
        Échéance
        <DatePicker selected={due} onChange={handleDueChange} />
      </label>
      <label>
        Projet
        <input type="text" value={projectId} onChange={handleProjectChange} />
      </label>
      <div className="edit-task-form-buttons">
        <button type="submit">Enregistrer</button>
        <button type="button" onClick={onCloseForm}>
          Annuler
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;
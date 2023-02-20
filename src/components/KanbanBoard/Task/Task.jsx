import React, { useState } from 'react';
import EditTaskForm from '../../EditTaskForm/EditTaskForm';
import { Draggable } from 'react-beautiful-dnd';
import { updateTask } from '../../../utils/api';
import './Task.css';

function Task(props) {
const { task, index, setTasks, onTaskDeleted, onTaskUpdated, onProjectChange } = props;
const [showEditForm, setShowEditForm] = useState(false);

const handleTaskDeleted = async () => {
const isSuccess = await updateTask({ ...task, is_deleted: true });
if (isSuccess) {
onTaskDeleted(task.id);
}
};

const handleTaskUpdated = async (updatedTask) => {
const isSuccess = await updateTask(updatedTask);
if (isSuccess) {
onTaskUpdated(updatedTask);
}
};

const handleShowEditForm = () => {
setShowEditForm(true);
};

const handleCloseEditForm = () => {
setShowEditForm(false);
};

const handleProjectChange = (projectId) => {
onProjectChange(projectId);
};

return (
<Draggable draggableId={task.id} index={index}>
{(provided) => (
<div
className="task-card"
{...provided.draggableProps}
{...provided.dragHandleProps}
ref={provided.innerRef}
>
<div className="task-header">
<div className="task-title">{task.content}</div>
<div className="task-actions">
<button className="edit-button" onClick={handleShowEditForm}>
Modifier
</button>
<button className="delete-button" onClick={handleTaskDeleted}>
Supprimer
</button>
</div>
</div>
<div className="task-details">
<div className="task-due-date">
Échéance :{' '}
{task.due ? new Date(task.due.date).toLocaleDateString() : 'Aucune'}
</div>
<div className="task-project">
Projet : {task.project_id ? task.project_id : 'Non assigné'}
</div>
</div>
{showEditForm && (
<EditTaskForm
           task={task}
           onCloseForm={handleCloseEditForm}
           onTaskUpdated={handleTaskUpdated}
           onProjectChange={handleProjectChange}
         />
)}
</div>
)}
</Draggable>
);
}

export default Task;
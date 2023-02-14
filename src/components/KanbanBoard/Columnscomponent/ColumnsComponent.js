import { useState } from 'react';
import './ColumnsComponent.css';

const ColumnsComponent = ({ columns, setColumns, addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addTask(task, columns, setColumns);
    setTask('');
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-add"
          placeholder="Add task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button className="btn-add" type="submit">Add</button>
      </form>
    </div>
  );
};

export default ColumnsComponent;
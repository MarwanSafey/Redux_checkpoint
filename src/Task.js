import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './taskSlice';

function Task({ task }) {
  const [editable, setEditable] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (editable) {
      dispatch(editTask({ id: task.id, description: editedDescription }));
    }
    setEditable(!editable);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        disabled={editable}
      />
      {editable ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={handleEdit}>{editable ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Task;

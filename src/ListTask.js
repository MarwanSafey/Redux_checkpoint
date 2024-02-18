import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from './taskSlice';

function ListTask() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => {
    if (state.tasks.filter === 'done') {
      return state.tasks.tasks.filter(task => task.isDone);
    } else if (state.tasks.filter === 'notDone') {
      return state.tasks.tasks.filter(task => !task.isDone);
    } else {
      return state.tasks.tasks;
    }
  });

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <div className='filter'>
        Filter by:
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('done')}>Done</button>
        <button onClick={() => handleFilterChange('notDone')}>Not Done</button>
      </div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ListTask;


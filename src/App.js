import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='header'>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;

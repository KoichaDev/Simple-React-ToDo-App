import React, { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food for Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  const onDeleteTaskHandler = (id) => {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  };

  const toggleReminderHandler = (id) => {
    const taskReminder = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(taskReminder);
  };

  const addTaskHandler = (task) => {
    const taskId = Math.floor(Math.random() * 10000) + 1;
    const newTask = { taskId, ...task };

    setTasks((prevTask) => [...prevTask, newTask]);
  };

  let taskContent = <p>No Tasks Found</p>;

  if (tasks.length > 0) {
    taskContent = (
      <Tasks
        tasks={tasks}
        onToggleHandler={toggleReminderHandler}
        onDeleteTaskHandler={onDeleteTaskHandler}
      />
    );
  }

  return (
    <div className='container'>
      <Header onAddHandler={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onTaskHandler={addTaskHandler} />}

      {taskContent}
    </div>
  );
}

export default App;

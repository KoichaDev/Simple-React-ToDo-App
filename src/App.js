import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const addTaskHandler = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        // This is to specify content type
        'Content-type': 'application/json',
      },
      // Turning from JavaScript Object to into JSON string
      body: JSON.stringify(task),
    });

    const dataTask = await res.json();

    setTasks((prevTask) => [...prevTask, dataTask]);

    // const taskId = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { taskId, ...task };
    // setTasks((prevTask) => [...prevTask, newTask]);
  };

  const onDeleteTaskHandler = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  };

  const toggleReminderHandler = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    const taskData = await res.json();

    const taskReminder = tasks.map((task) =>
      task.id === id ? { ...task, reminder: taskData.reminder } : task
    );
    setTasks(taskReminder);
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
    <Router>
      <div className='container'>
        <Header onAddHandler={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
        {showAddTask && <AddTask onTaskHandler={addTaskHandler} />}
        <Route path='/' exact render={(props) => <>{taskContent}</>} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

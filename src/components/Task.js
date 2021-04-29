import { FaTimes } from 'react-icons/fa';

function Task({ task, onToggleHandler, onDeleteTaskHandler }) {
  const taskStyle = {
    color: 'red',
    cursor: 'pointer',
  };
  const { id, day, text, reminder } = task;
  const classNameReminder = `task ${reminder === true ? 'reminder' : ''}`;

  return (
    <div className={classNameReminder} onDoubleClick={() => onToggleHandler(id)}>
      <h3>
        {text} <FaTimes onClick={() => onDeleteTaskHandler(id)} style={taskStyle} />
      </h3>
      <p>{day}</p>
    </div>
  );
}

export default Task;

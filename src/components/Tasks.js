import Task from './Task';

function Tasks({ tasks, onDeleteTaskHandler, onToggleHandler }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onToggleHandler={onToggleHandler}
            onDeleteTaskHandler={onDeleteTaskHandler}
          />
        );
      })}
    </>
  );
}

export default Tasks;

import React, { useState } from 'react';

function AddTask({ onTaskHandler }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add text');
      return;
    }

    onTaskHandler({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          id='task'
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
      </div>

      <div className='form-control'>
        <label htmlFor='day'>Day & Time</label>
        <input type='text' id='day' value={day} onChange={(e) => setDay(e.currentTarget.value)} />
      </div>

      <div className='form-control form-control-check'>
        <label htmlFor='set-reminder'>set-reminder</label>
        <input
          type='checkbox'
          id='set-reminder'
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Submit Task' className='btn btn-block' />
    </form>
  );
}

export default AddTask;

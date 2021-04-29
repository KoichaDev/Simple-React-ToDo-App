import PropTypes from 'prop-types';
import Button from './Button';
Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Header({ title, onAddHandler, showAddTask }) {
  const toggleTextMessage = showAddTask ? 'Close' : 'Show';
  const toggleClassColor = showAddTask ? 'green' : 'red';

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={toggleTextMessage} onAddHandler={onAddHandler} color={toggleClassColor} />
    </header>
  );
}

export default Header;

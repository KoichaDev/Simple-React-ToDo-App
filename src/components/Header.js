// useLocation allows us to lookat the Route that we are currently on
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const displayButton = location.pathname === '/' && (
    <Button text={toggleTextMessage} onAddHandler={onAddHandler} color={toggleClassColor} />
  );

  return (
    <header className='header'>
      <h1>{title}</h1>
      {displayButton}
    </header>
  );
}

export default Header;

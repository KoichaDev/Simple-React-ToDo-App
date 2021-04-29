import PropTypes from 'prop-types';

import React from 'react';

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function Button({ ...props }) {
  const { color, text, onAddHandler } = props;

  return (
    <button className='btn' style={{ color: color }} onClick={onAddHandler}>
      {text}
    </button>
  );
}

export default Button;

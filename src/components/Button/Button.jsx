import React from 'react';
import { PropTypes } from 'prop-types';

export const Button = ({ addPage }) => {
  return (
    <button type="button" onClick={addPage}>
      Load more
    </button>
  );
};

Button.propTypes = {
  addPage: PropTypes.func,
};

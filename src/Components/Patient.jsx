import PropTypes from 'prop-types';
import React from 'react';

export default function Patient({ name }) {
  return (
    <li>
      {name}
      <div>
        <button type="button">Editar</button>
        <button type="button">Excluir</button>
      </div>
    </li>
  );
}

Patient.defaultProps = {
  name: '',
};

Patient.propTypes = {
  name: PropTypes.string,
};

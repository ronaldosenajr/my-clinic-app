import React from 'react';
import PropTypes from 'prop-types';

export default function ContentPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <section
      id={ `nav-tabpanel-${index}` }
      { ...other }
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </section>
  );
}

ContentPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

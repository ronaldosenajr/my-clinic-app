import PropTypes from 'prop-types';
import React, { useState } from 'react';
import scheduleOfficer from './Context';

function ScheduleProvider({ children }) {
  const [user, setUser] = useState({});

  const contextValue = {
    user,
    setUser,
  };
  return (
    <scheduleOfficer.Provider value={ contextValue }>
      {children}
    </scheduleOfficer.Provider>
  );
}

ScheduleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScheduleProvider;

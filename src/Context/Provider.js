import PropTypes from 'prop-types';
import React, { useState } from 'react';
import scheduleOfficer from './Context';

function ScheduleProvider({ children }) {
  const [user, setUser] = useState({});
  const [tabValue, setTabValue] = useState(0);

  const contextValue = {
    user,
    setUser,
    tabValue,
    setTabValue,
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

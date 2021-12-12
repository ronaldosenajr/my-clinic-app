import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import scheduleOfficer from './Context';
import authentication from '../firebaseConfig';

function ScheduleProvider({ children }) {
  const [user, setUser] = useState({});
  const [tabValue, setTabValue] = useState(1);
  useEffect(() => {
    authentication.onAuthStateChanged(setUser);
  }, []);

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

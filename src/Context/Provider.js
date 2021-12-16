import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import scheduleOfficer from './Context';
import authentication, { db } from '../firebaseConfig';

function ScheduleProvider({ children }) {
  const [user, setUser] = useState({});
  const [tabValue, setTabValue] = useState(1);
  const [patients, setPatients] = useState([]);

  const patientsCollectionRef = collection(db, 'pacientes');

  useEffect(() => {
    authentication.onAuthStateChanged(setUser);
  }, []);
  useEffect(() => {
    const getPatients = async () => {
      const data = await getDocs(patientsCollectionRef);
      setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPatients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    user,
    setUser,
    tabValue,
    setTabValue,
    patients,
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

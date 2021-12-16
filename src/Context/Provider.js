import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import scheduleOfficer from './Context';
import authentication, { db } from '../firebaseConfig';

function ScheduleProvider({ children }) {
  const [user, setUser] = useState({});
  const [tabValue, setTabValue] = useState(1);
  const [patients, setPatients] = useState([]);

  const patientsCollectionRef = collection(db, 'pacientes');
  const getPatients = async () => {
    const data = await getDocs(patientsCollectionRef);
    setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    authentication.onAuthStateChanged(setUser);
  }, []);
  useEffect(() => {
    getPatients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createNewPatient = async (patient) => {
    await addDoc(patientsCollectionRef, patient);
    getPatients();
  };

  const contextValue = {
    user,
    setUser,
    tabValue,
    setTabValue,
    patients,
    createNewPatient,
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

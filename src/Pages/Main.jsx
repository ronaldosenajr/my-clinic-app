import React, { useContext } from 'react';
import scheduleContext from '../Context/Context';
import Header from '../Components/Header';

export default function Main() {
  const { user } = useContext(scheduleContext);
  return (
    <div>
      <Header />
      <h3>{user.email}</h3>
    </div>
  );
}

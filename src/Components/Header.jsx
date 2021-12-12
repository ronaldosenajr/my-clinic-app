import React, { useContext, useEffect } from 'react';
import scheduleContext from '../Context/Context';

export default function Header() {
  const { user, setUser } = useContext(scheduleContext);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUser(getLocalStorage);
    console.log('chamou');
  }, [setUser]);
  return (
    <header>
      <h3>{user.email}</h3>
    </header>
  );
}

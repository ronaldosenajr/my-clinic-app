import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import authentication from '../firebaseConfig';
import scheduleContext from '../Context/Context';
import './Login.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: `${theme.spacing(marginPaddingWidth)}px`,
//     justifyContent: 'center',
//     alignContent: 'center',
//     display: 'flex',
//   },
//   grid: {
//     maxWidth: 400,
//     margin: `${theme.spacing(1)}px auto`,
//     padding: theme.spacing(marginPaddingWidth),
//     textAlign: 'center',
//   },
//   card: {
//     width: `${theme.spacing(marginPaddingWidth)}vw`,
//     minWidth: 320,
//     backgroundColor: '#F8F8F1',
//   },
// }));

export default function SimpleContainer() {
  const history = useHistory();

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const { setUser } = useContext(scheduleContext);

  const showSignInError = () => {
    const waitTimer = 2000;
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, waitTimer);
  };

  const validateEmail = (email) => {
    setUserEmail(email);
    setEmailValid(true);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      setEmailValid(false);
    }
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authentication, userEmail, password,
      );
      const { user } = userCredential;
      setPassword('');
      setUser(user);
      history.push('/main');
    } catch (error) {
      console.log(error);
      showSignInError();
    }
  };

  return (
    <main className="login-main">
      <form className="login-forms">
        <h1>ClinicApp</h1>
        <div className="login-input">
          <label htmlFor="email-input">
            <input
              placeholder="Email"
              type="email"
              id="email-input"
              value={ userEmail }
              onChange={ ({ target }) => validateEmail(target.value) }
            />
          </label>
        </div>
        <div className="login-input">
          <label htmlFor="password-input">
            <input
              placeholder="Senha"
              type="password"
              id="password-input"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={ signIn }>ENTRAR</button>
        </div>
        {showError ? <p>Email ou senha invalidos</p> : ''}
      </form>
    </main>
  );
}

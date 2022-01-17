import firebase from 'firebase/compat/app';
import 'firebase//compat/auth';
import 'firebase/compat/database';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { saveToLocalStorage } from 'src/libs/utils';
import { SignIn } from 'src/components/templates/sign-in';
import { URL_DASHBOARD } from 'src/constants/constants';

const LoginPage: React.FC = () => {
  const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === 'true');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(credential => {
      if (credential) {
        setAuth(true);
        saveToLocalStorage('auth', 'true');
        credential.getIdToken(true).then(token => {
          saveToLocalStorage('token', token);
        });
      }
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  return auth ? <Navigate to={URL_DASHBOARD} /> : <SignIn />;
};

export default LoginPage;

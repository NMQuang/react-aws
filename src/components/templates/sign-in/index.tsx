import React from 'react';
import firebase from 'firebase/compat/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import logo from 'src/assets/images/logo.png';
import { Footer } from 'src/components/organisms/footer';

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export const SignIn: React.FC = () => (
  <div className="t-sign-in">
    <img className="t-sign-in__logo" src={logo} alt="kitsutaka" />
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    <p className="t-sign-in__text">
      By continuing, you are indicating that you accept our
      <a href="https://policies.google.com/terms?hl=en" target={'_blank'} rel="noopener noreferrer">
        {' '}
        Terms of Service{' '}
      </a>
      and
      <a href="https://policies.google.com/privacy?hl=en" target={'_blank'} rel="noopener noreferrer">
        {' '}
        Privacy Policy.
      </a>
    </p>
    <Footer>©2021 Kitsutaka Co.,Ltd.</Footer>
  </div>
);

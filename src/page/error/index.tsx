import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <p>
        Not found{' '}
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          return HomePage
        </button>
      </p>
    </div>
  );
};

export default ErrorPage;

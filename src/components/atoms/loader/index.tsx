import React from 'react';
import LoaderGif from 'src/assets/icons/loader.gif';

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={LoaderGif} />
      </div>
    </div>
  );
};

import React from 'react';
import style from './Spynner.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spynner = () => {
  return (
    <div className={style.Box}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Spynner;

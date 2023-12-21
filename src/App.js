import React from 'react';
import './style.css';
import fetchApi from './fetchApi';
import colorBox from './colorBox';

export default function App() {
  return (
    <div>
      <fetchApi />
      <colorBox />
    </div>
  );
}

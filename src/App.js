'use strict';

import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Provider from './context/authentication';

import './App.scss';

export default function App() {
  return (
    <div className="container">
      <Provider>
        <Navbar />
        <Content />
      </Provider>
    </div>
  );
}

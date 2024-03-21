import React from 'react';
import ReactDOM from 'react-dom/client';
import './main/css/index.css';
import Dashboard from './main/js/searcher/component/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProvider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  return <AppProvider>
          <App/>
    </AppProvider>
}

root.render(<Index/>);



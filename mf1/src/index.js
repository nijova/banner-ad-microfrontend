import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderMf1 = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
};

window.unmountMf1 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Mf1-container')) {  
  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
}

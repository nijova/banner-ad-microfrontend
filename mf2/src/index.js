import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderMf2 = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
};

window.unmountMf2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Mf2-container')) {  
  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
}

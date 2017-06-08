import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import './app/styles/css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

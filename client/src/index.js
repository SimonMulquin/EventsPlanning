import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import css from './reset.css';
import registerServiceWorker from './api/sw/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

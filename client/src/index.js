import React from 'react';
import ReactDOM from 'react-dom';

import App from 'ui/App';
import css from 'configs/reset.css';
import registerServiceWorker from 'api/sw/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

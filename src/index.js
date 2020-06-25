import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTS
import Router from './router';

// IMPORT CSS
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();

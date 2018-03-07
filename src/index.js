import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

import './style.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

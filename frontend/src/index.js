import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import pageReducer from './store/reducers/pages'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

const store = createStore(pageReducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

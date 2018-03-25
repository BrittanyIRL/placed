import React from 'react';
import ReactDOM from 'react-dom';
// routing
import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// reducers
import tableSettingReducer from './store/reducers/tableSetting';

// styles
import './index.css';
// base component
import App from './App';

// service worker
import registerServiceWorker from './registerServiceWorker';

// allow redux dev console
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  tableSetting: tableSettingReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

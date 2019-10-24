import React from 'react';
import ReactDOM from 'react-dom';//Allows you to connect to doms of the hmtl
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import 'tachyons';
import registerServiceWorker from './serviceWorker';
import App from './containers/App';
import {searchRobots, requestRobots} from './reducers';

const logger = createLogger();
const enhancers = compose(
    //this is ordered so becareful of the order
    applyMiddleware(thunkMiddleware,logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer,enhancers);

ReactDOM.render(
    //Provider component allows you to pass down the store component throughtout the app 
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
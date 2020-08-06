import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; 
//apply middleware will connect the redux thunk to the redux store.
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers/index';

const store = createStore(reducers,applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
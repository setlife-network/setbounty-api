import { createStore, compose, applyMiddleware } from 'redux';
import { alias, wrapStore } from 'react-chrome-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = [thunk, logger];

const store = compose(
    applyMiddleware(...middleware)
)(createStore)(rootReducer);

wrapStore(store, {
    portName: 'setbounty'
});

chrome.browserAction.onClicked.addListener((tabs) => {
    store.dispatch({
        type: 'CHANGE_SHOW_OVERLAY',
        show: !store.getState().environment.showOverlay
    })
})
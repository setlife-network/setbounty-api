import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App';

// import './styles/index.less';

const proxyStore = new Store({ portName: 'setbounty' });

let doc = document.getElementById('setbounty-chrome');
if (doc) { doc.outerHTML = '' }

const anchor = document.createElement('div');
anchor.id = 'setbounty-chrome';

document.body.insertBefore(anchor, document.body.childNodes[0]);

proxyStore.ready().then(() => {
    render(
        <Provider store={proxyStore}>
            <App/>
        </Provider>,
        document.getElementById('setbounty-chrome')
    );
})
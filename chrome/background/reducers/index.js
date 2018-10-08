import { combineReducers } from 'redux';

import auth from './auth';
import environment from './environment';

export default combineReducers({
    auth,
    environment
});

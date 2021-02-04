import { combineReducers } from 'redux';
import { caseReducer } from './case-reducer';

const rootReducer = combineReducers({
    caseReducer: caseReducer,
});

export default rootReducer;

import CaseManager from '../../managers/case-manager';
import { SELECT_CASE, UPDATE_CASES } from '../action/case-action';

const initialState = {
    selectedCase: -1,
    caseNums: [],
};

export default function caseReducer(state = initialState, action) {
    const nextState = { ...state };

    if (!action) {
        return nextState;
    }

    switch (action.type) {
        case UPDATE_CASES:
            nextState.caseNums = CaseManager.getCaseNums();
            break;
        case SELECT_CASE:
            nextState.selectedCase = action.payload;
            break;
        default:
            break;
    }

    return nextState;
}

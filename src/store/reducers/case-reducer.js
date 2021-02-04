import { SELECT_CASE, UPDATE_CASE } from '../action/case-action';

const initialState = {
    selectedCase: -1,
    cases: [],
};

export const caseReducer = (state = initialState, action) => {
    const nextState = { ...state };

    if (!action) {
        return nextState;
    }

    switch (action) {
        case UPDATE_CASE:
            nextState.cases = action.payload;
            break;
        case SELECT_CASE:
            nextState.selectedCase = action.payload;
            break;
        default:
            break;
    }

    return nextState;
};

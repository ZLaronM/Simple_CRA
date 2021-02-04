export const UPDATE_CASE = 'case';
export const SELECT_CASE = 'selectCase';

export const updateCaseAction = (caseNums) => ({
    type: UPDATE_CASE,
    payload: caseNums,
});

export const selectCaseAction = (caseNum) => ({
    type: SELECT_CASE,
    payload: caseNum,
});

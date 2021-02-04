export const UPDATE_CASES = 'case';
export const SELECT_CASE = 'selectCase';

export const updateCasesAction = (caseNums) => ({
    type: UPDATE_CASES
});

export const selectCaseAction = (caseNum) => ({
    type: SELECT_CASE,
    payload: caseNum,
});

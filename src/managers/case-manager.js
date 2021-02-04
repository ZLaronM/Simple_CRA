import Case from '../classes/case';
import { updateCaseAction } from '../store/action/case-action';

import store from '../store/store';

class CaseManager {
    constructor() {
        this.cases = [];
    }

    updateStore() {
        const caseNums = this.cases.map((c) => c.caseNum);
        store.dispatch(updateCaseAction(caseNums));
    }

    addCase(caseNum, agencies = [], demographics = '') {
        this.cases.push(new Case(caseNum, agencies, demographics));
    }

    updateCase(caseNum) {}

    deleteCase(caseNum) {}

    deleteAllCases() {
        this.cases = [];
    }
}

const caseManager = new CaseManager();

export default caseManager;

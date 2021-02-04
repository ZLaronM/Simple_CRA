import Case from '../classes/case';
import { updateCasesAction } from '../store/action/case-action';

import store from '../store/store';

class CaseManager {
    constructor() {
        this.cases = [];
    }

    updateStore() {
        store.dispatch(updateCasesAction());
    }

    addCase(caseNum, agencies = [], demographics = '') {
        if (!this.doesCaseExist(caseNum)) {
            this.cases.push(new Case(caseNum, agencies, demographics));
            this.updateStore();
        }
    }

    doesCaseExist = (caseNum) =>
        this.cases.filter((c) => c.caseNum === caseNum).length > 0;

    getCase = (caseNum) => this.cases.find((c) => c.caseNum === caseNum);

    getCaseNums = () => this.cases.map((c) => c.caseNum);

    getDemo(caseNum) {
        const caseItem = this.getCase(caseNum);
        return caseItem ? caseItem.demo : '';
    }

    updateCase(caseNum) {}

    deleteCase(caseNum) {
        this.cases = this.cases.filter((c) => c.caseNum !== caseNum);
    }

    deleteAllCases() {
        this.cases = [];
    }
}

const caseManager = new CaseManager();

export default caseManager;

export default class Case {
    constructor(caseNum, agenciesList = [], demographics = '') {
        this.caseNum = caseNum;
        this.agencies = agenciesList;
        this.demo = demographics;
    }
}

class CalcCalculator {

    constructor() {
        this._displayCalc = '0'
        this._currentDate;
        this.initialize();
    }

    initialize() {

        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora')

        let currentTime = new Date();

        displayCalcEl.innerHTML = '0';
        dateEl.innerHTML = currentTime.toLocaleDateString()
        timeEl.innerHTML = `${currentTime.getHours()}:${currentTime.getMinutes()}`

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(data) {
        this._currentDate = data
    }
}
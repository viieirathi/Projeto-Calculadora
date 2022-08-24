class CalcCalculator {
  constructor() {
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    this.initButtonsEvent();
  }

  initialize() {
    this.setDisplayDateTime();
    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  setDisplayDateTime() {
    this._dateEl.innerHTML = this.currentDate.toLocaleDateString();
    this._timeEl.innerHTML = this.currentDate.toLocaleTimeString();
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    return (this._currentDate = value);
  }
}

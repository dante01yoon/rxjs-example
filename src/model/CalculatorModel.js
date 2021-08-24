class CalculatorModel {
  calculate() {
    this.totalOperation = math.eval(this.totalOperation);
    this.state = FIRST_OPERATION;
    this.emitter.emit("TotalChanged");
  }

  addValue(value, type) {
    if (type === NUMERIC) {
      this.totalOperation = this.getValue(value);
    } else if (type === SYMBOL) {
      this.totalOperation = this.checkSymbol(value);
    }

    this.state = IN_PROGRESS_OPERATION;
    this.emitter.emit("TotalChanged");
  }

  reset() {
    this.totalOperation = 0;
    this.state = FIRST_OPERATION;
    this.emitter.emit("TotalChanged");
  }
}
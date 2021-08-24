
class Calculator {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener)
  }
  calculate() {
    this.listeners.forEach((listener) => {
      listener.print(
        listener.items.reduce((acc, curr) => acc += Object.values(curr)[0], 0)
      )
    })
  }
}

class Receipt {
  constructor() {
    this.items = [{
      banana: 500,
    },
    {
      tomato: 300,
    },
    { egg: 250, },
    ]
  }

  print(total) {
    console.log(total);
  }
}

const calculator = new Calculator();
calculator.addListener(new Receipt());
calculator.calculate();
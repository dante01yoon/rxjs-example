
class Calculator {
  constructor(itemA, itemB) {
    const obs$ = of(itemA, itemB);
    const sum$ = obs$
      .pipe(
        reduce((acc, item) => acc + item),
      )
    return {
      observable: sum$
    }
  }
}

class Receipt {
  constructor(observable$) {
    observable$.subscribe(value => console.log(`total receipt: $${value}`))
  }
}

const pizza = 6.00;
const beer = 5.00;

const calc = new Calculator(pizza, beer);
const receipt = new Receipt(calc.observable);
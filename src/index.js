import animate from "./animate";
import { from, of } from "rxjs";
import { reduce } from "rxjs/operators";
import CalculatorController from "./controller/CalculatorController";

// const animate$ = animate(100, 500, 300);
// setTimeout(() => {
//   animate$.subscribe(console.log)
// }, 300);

if (module.hot) {
  module.hot.accept();
}


const calculaor = new CalculatorController();

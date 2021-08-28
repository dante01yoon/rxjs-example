import { drag$ } from "./drag";

import animate from "./animate";

drag$.subscribe(distance => console.log("start$와 move$의 차이 값: ", distance));

// const animate$ = animate(100, 500, 300);
// setTimeout(() => {
//   animate$.subscribe(console.log)
// }, 300);

if (module.hot) {
  module.hot.accept();
}
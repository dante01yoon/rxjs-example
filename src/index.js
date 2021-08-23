import animate from "./animate";

const animate$ = animate(100, 500, 300);
setTimeout(() => {
  animate$.subscribe(console.log)
}, 300);

if (module.hot) {
  module.hot.accept();
}
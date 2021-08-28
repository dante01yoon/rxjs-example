import { fromEvent, switchMap, takeUntil } from "rxjs";
import { map } from "rxjs/operators"
const $view = document.getElementById("carousel");
const $container = $view.querySelector(".container");
const PANEL_COUNT = $container.querySelectorAll(".panel").length;

const SUPPORT_TOUCH = "ontouchstart" in window;

const EVENTS = {
  start: SUPPORT_TOUCH ? "touchstart" : "mousedown",
  move: SUPPORT_TOUCH ? "touchmove" : "mousemove",
  end: SUPPORT_TOUCH ? "touchend" : "mouseup",
}

function toPos($obs) {
  return $obs
    .pipe(
      map(v => SUPPORT_TOUCH ? v.changedTouches[0].pageX : v.pageX),
    );
}

const start$ = fromEvent($view, EVENTS.start)
  .pipe(
    toPos,
  );
const move$ = fromEvent($view, EVENTS.move)
  .pipe(
    toPos,
  );
const end$ = fromEvent($view, EVENTS.end);

const drag$ = start$.pipe(
  switchMap(start => {
    return move$.pipe(
      map(move => move - start),
      takeUntil(end$)
    )
  })
);

export {
  start$,
  move$,
  end$,
  drag$,
}
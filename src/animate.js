import { animationFrameScheduler, interval, concat, of, defer } from "rxjs";
import { map, takeWhile } from "rxjs/operators";


export default function (from, to, duration) {
  return defer(() => {
    const scheduler = animationFrameScheduler;
    const start = scheduler.now();
    const interval$ = interval(0, scheduler)
      .pipe(
        map(() => (scheduler.now() - start) / duration),
        takeWhile(r => r < 1)
      );

    return concat(interval$, of(1))
      .pipe(
        map(rate => from + (to - from) * rate)
      )
  })
}
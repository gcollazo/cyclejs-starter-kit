import Rx from 'rx';
import { run } from '@cycle/core';
import { makeDOMDriver, h1 } from '@cycle/dom';

function main() {
  return {
    DOM: Rx.Observable.of(
      h1('Welcome to Cycle.js')
    )
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);

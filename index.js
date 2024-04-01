// const test = debounce(console.log, 1000);

// test(1);
// test(2);
// test(3);

// setTimeout(() => test(4), 1200);
// setTimeout(() => test(5), 1000);

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let isWaiting = false;
  
  return function (...args) {
    if (isWaiting) {
      return;
    }
    fn.apply(this, args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
}

const test = throttle(console.log, 500);

test(1);
test(2);
test(3);

setTimeout(() => test(4), 2050);
setTimeout(() => test(5), 100);

// function throttle(fn, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return fn(...args);
//   };
// }

function throttle(fn, limit) {
  let isWaiting = true;
  let timeoutId;
  let latestEvent;

  return function (e, ...args) {
    latestEvent = e;

    if (isWaiting) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      isWaiting = false;
    }

    if (timeoutId) {
      return;
    }

    timeoutId = setTimeout(() => {
      fn(e, ...args);
      isWaiting = true;
    }, limit);
  };
}

// function throttle(fn, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return fn(...args);
//   };
// }

export default throttle;

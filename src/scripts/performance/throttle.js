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

// function throttle(fn, limit) {
//   let isWaiting = true;
//   let timeoutId;
//   // let latestEvent;

//   return function (...args) {
//     // latestEvent = e;

//     if (timeoutId) {
//       return;
//     }

//     if (isWaiting) {
//       clearTimeout(timeoutId);
//       timeoutId = undefined;
//       isWaiting = false;
//       return;
//     }

//     timeoutId = setTimeout(() => {
//       isWaiting = true;
//       fn(...args);
//     }, limit);
//   };
// }

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

export default throttle;

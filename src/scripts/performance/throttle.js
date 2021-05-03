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

// function throttle(fn, limit) {
//   let flag = true;

//   return function () {
//     if (!flag) {
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//       return;
//     } else {
//       fn();
//       flag = false;
//     }
//   };
// }

export default throttle;

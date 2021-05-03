function debounce(fn, wait) {
  let timeoutId;

  return function (...args) {
    const later = () => {
      fn(...args);
    };
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, wait);
  };
}

export default debounce;

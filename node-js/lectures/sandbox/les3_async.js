//  timeout

const fn100 = timeout(100, fn);
const fn200 = timeout(200, fn);

setTimeout(() => {
  fn100("first");
  fn200("second");
}, 150);

// functions

function fn(par) {
  console.log("Timeout with par: " + par);
}

function timeout(msec, fn) {
  let timer = setTimeout(() => {
    if (timer) console.log("Function timeout");
    timer = null;
  }, msec);

  return (...args) => {
    if (timer) {
      timer = null;
      fn(...args);
    }
  };
}

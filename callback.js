/*const callme = () => {
  console.log("hello from callback function");
};

const greeting = (callback) => {
  console.log("Hello World");
  callback();
};

greeting(callme);

const greeting2 = (callback) => {
  console.log("Hello World");
  callback("Mok");
};

greeting2((name) => {
  console.log(`Hello from ${name}`);
});

const originalArr = [1, 2, 3, 4];

const mapArry = (arr, cb) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }

  return result;
};
const newArr = mapArry(originalArr, (item) => {
  return item * 2;
});
console.log(newArr);
*/
function filterArray(arr, cb) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping === true) {
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  if (item >= 0) {
    return true;
  } else {
    return false;
  }
  //return item > 0
});
console.log(afterFilter);

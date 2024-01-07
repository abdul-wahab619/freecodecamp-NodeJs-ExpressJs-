// promises has 3 conditions
//pending
//resolve => then
//reject => catch

let ans = new Promise((res, rej) => {
  if (false) {
    return res();
  } else {
    return rej();
  }
});
ans
  .then(function () {
    console.log("resolved");
  })
  .catch(function () {
    console.log("rejeect");
  });
//example 2
let ans = new Promise((res, rej) => {
  return res("Task1");
});
let ans2 = ans
  .then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
      return res("Task2");
    });
  })
  .catch(function () {
    console.log("rejeect");
  });

let ans3 = ans2.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("Task3");
  });
});
ans3.then(function (data) {
  console.log(data);
});

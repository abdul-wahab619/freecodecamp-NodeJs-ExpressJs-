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

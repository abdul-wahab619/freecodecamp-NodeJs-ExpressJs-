// Shallow copy:
// ye wo copy hoti hain ka jab hum koi b object copy krta hain
// to agr to wo nested ho to us ka upper level ka object ka elements
// copy hota hain but lower mn again wo reference pass kr data hai that's not good thing

// Deep copy:
// is kind of same but opposite to it

// var obj1 = {
//   name: "Abdul",
//   age: 22,
// };

// var obj2 = obj1;

// console.log("obj1:", obj1);
// console.log("obj2:", obj2);

// obj2.name = "Wahab";

// console.log("obj1:", obj1);
// console.log("obj2:", obj2);

// obj3 = { ...obj2 };
// obj3.name = "abdul Wahab";

// console.log("obj2:", obj2);
// console.log("obj3:", obj3);

var userinfo = {
  name: "Abdul Wahab Sab!",
  age: 22,
  social: {
    facebook: {
      acc1: "acc1@gmail.com",
      acc2: "acc2@gmail.com",
    },
    twitter: {
      free: {
        ac1: "ac1@gmail.com",
      },
      paid: {
        ac1: "ac1@gmail.com",
      },
    },
  },
};

// var objj = { ...obj };

// // objj.social.facebook.acc1 = "changed";

// // console.log("obj", obj.social.facebook.acc1);
// // console.log("objj", objj.social.facebook.acc1);

// // use of parse JSON Stringify:
// var objj = JSON.parse(JSON.stringify(obj));
// objj.social.facebook.acc1 = "this changed now";

// console.log("obj", obj.social.facebook.acc1);
// console.log("objj", objj.social.facebook.acc1);

// code for deep copy how things works:

function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  var copiedVal = Array.isArray(obj) ? [] : {};
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return copiedVal;
}

var copy = makeDeepCopy(userinfo);
copy.social.facebook.acc1 = "changes happening over here!";

console.log("copy:", copy.social.facebook.acc1);
console.log("userinfo:", userinfo.social.facebook.acc1);

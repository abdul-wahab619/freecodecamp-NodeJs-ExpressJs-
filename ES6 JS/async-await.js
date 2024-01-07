// koi b esa func jisma app async code likhega,
//     kyoki async hai async to app promises ka istamal kar skta hain,
//     jab uska answer ayega apko then lagana paraga,
//     us then se bachana ka liya,
//         ap async await ka istemal kar skta hain

// without async await
function abc() {
  fetch("https://randomuser.me/api")
    .then(function (raw) {
      return raw.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

abc();
//with async await

async function xyz() {
  let raw = await fetch("https://randomuser.me/api");
  let result = await raw.json();
  console.log(result);
}

xyz();

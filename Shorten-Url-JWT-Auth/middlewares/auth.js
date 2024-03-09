import { getUser } from "../service/auth.js";

async function checkAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;

  if (!tokenCookie) return next();

  const token = tokenCookie;
  try {
    const user = await getUser(token); // Await getUser function to resolve the promise
    if (!user) {
      return next();
    }
    req.user = user;
    console.log("User authenticated:", user);
    return next();
  } catch (error) {
    return next(error); // Pass error to the error handling middleware
  }
}

function restrictedTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) {
      return res.redirect("/login");
    }

    if (!roles.includes(req.user.role)) {
      return res.end("UnAuthorized");
    }

    console.log("User authorized with role:", req.user.role);
    return next();
  };
}

export { checkAuthentication, restrictedTo };

// async function restrictToLoggedInUserOnly(req, res, next) {
//   const userUid = req.cookies?.uid;

//   if (!userUid) return res.redirect("/login");
//   const user = getUser(userUid);

//   if (!user) return res.redirect("/login");
//   req.user = user;
//   next();
// }

// async function checkAuth(req, res, next) {
//   const userUid = req.cookies?.uid;

//   const user = getUser(userUid);

//   req.user = user;
//   next();
// }

const JWT = require("jsonwebtoken");
const secret = "$Wahab619";

function createToken(user) {
  const payload = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
  };

  const token = JWT.sign(payload, secret);

  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);

  return payload;
}

module.exports = {
  createToken,
  validateToken,
};

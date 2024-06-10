const Jwt = require("jsonwebtoken");
const jwtKey = "vanLife";
const verifyToken = (req, resp, next) => {
  let token = req.headers["authorization"];
  //console.log(token)
  if (token) {
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        resp.status(301).send({ result: "Please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    resp.status(303).send({ result: "please add token with header" });
  }
};
module.exports = verifyToken;

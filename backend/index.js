require("./db/config");
const vanListSchema = require("./db/vanlist");
const userSchema = require("./db/user");
const cors = require("cors");
const express = require("express");
const Jwt = require("jsonwebtoken");
const jwtKey = "vanLife";
const verifyToken = require("./token")
const app = express();
app.use(express.json());
app.use(cors());
app.post("/addUser", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = new userSchema(req.body);
  let result = await user.save();
  // console.log(result);
  result = result.toObject();
  //console.log(result);
  delete result.password;
  // console.log(result);
  Jwt.sign({result},jwtKey,(err,token)=>{
    if (err){
      resp.send({result:"Some things went wrong try some time later!"})
    }
    resp.send({result,auth:token});
  });
  } else {
    resp.status(401).send({result:"Please enter a valid credential"})
  }
  let user = new userSchema(req.body);
  let result = await user.save();
  // console.log(result);
  result = result.toObject();
  //console.log(result);
  delete result.password;
  // console.log(result);
  Jwt.sign({result},jwtKey,(err,token)=>{
    if (err){
      resp.send({result:"Some things went wrong try some time later!"})
    }
    resp.send({result,auth:token});
  });

 
});
app.post("/addVan", async (req, resp) => {
  let vanList = new vanListSchema(req.body);
  let result = await vanList.save();
  resp.send(result);
});
app.get("/getVans", verifyToken , async (req, resp) => {
  let vans = await vanListSchema.find();
  resp.send(vans);
  //  resp.status(400).send({ statusText: "bad request5678", status: 40065 });
});
app.get("/getVanDetail/:id",verifyToken, async (req, resp) => {
  let vanDetail = await vanListSchema.findOne({ id: req.params.id });
  resp.send(vanDetail);
});
app.listen(5000);

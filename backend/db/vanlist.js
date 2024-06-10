const mongoose = require("mongoose");
const vanListSchema = new mongoose.Schema({
  id:String,
  name:String,
  description:String,
  price:Number,
  imageUrl:String,
  type:String,
  hostId:String

});
module.exports = mongoose.model("vanlists",vanListSchema);
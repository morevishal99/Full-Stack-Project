const mongoose =require("mongoose");

const userData = mongoose.Schema({
    name:String,
    email:String,
    password:String||Number,
    phonenumber:Number,
    cart:Array
})


const userModel=mongoose.model("UserData",userData)

module.exports={userModel}
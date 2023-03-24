const mongoose =require("mongoose");

const userData = mongoose.Schema({
    username:String,
    email:String,
    password:String||Number,
    phonenumber:Number,
    dob:String||Number,
    role:String

})


const userModel=mongoose.model("UserData",userData)

module.exports={userModel}
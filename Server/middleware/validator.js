const validator=(req,res,next)=>{
const {name,email,password,phonenumber}= req.body;
if(!name||!email||!password||!phonenumber){
res.send({"msg":"All feilds are required"})
}else{
    next()
}
  
}


module.exports={validator}
const isAuth=(req,res,next)=>{
    const {email,password}=req.query;

    if(!email||!password){
        res.send({"msg":"Wrong Credentials"})
    }else if(email==email&&password===password){
        console.log(email,password)
       next()
    }
}



const isAuths = (req, res, next) => {
    const { email, password } = req.body;
  
    // Perform validation checks here
    if (email === 'example@gmail.com' && password === 'password123') {
      req.user = { email };
      next();
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  };

  module.exports={isAuth,isAuths}
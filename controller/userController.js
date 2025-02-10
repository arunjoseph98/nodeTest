const users = require('../models/usermodel')
const jwt = require('jsonwebtoken')

exports.addUserController= async (req,res)=>{
    console.log("inside addUserController");
    const {username,email,password,ph} = req.body
    console.log(email);
    
    try{
                
        const isExist = await users.findOne({email})
        console.log(isExist);
        if(isExist)
        {
            res.status(406).json("user exists..")
        }
        else{
            const newUser = new users({
                username,email,password,ph
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err)
    {
        res.status(401).json(err)
    }
    
}

exports.loginUserController= async (req,res)=>{
    console.log("inside loginUserController");
    const {email,password} = req.body
        
    try{
                
        const isExist = await users.findOne({email,password})
        console.log(isExist.id);
        if(isExist)
        {
            const token = jwt.sign(isExist.id,process.env.JWTKEY)
            res.status(200).json({...req.body,token})
        }
        else{
            res.status(406).json("invalid username / password")
        }
    }catch(err)
    {
        res.status(401).json(err)
    } 
}

exports.allUserController= async (req,res)=>{
    console.log("inside allUserController");
    
    try{
                
        const userData = await users.find({},{password:0})
        res.status(200).json(userData)
        
    }catch(err)
    {
        res.status(401).json(err)
    } 
}

exports.userDataController= async (req,res)=>{
    console.log("inside allUserController");
    const userid = req.userID
    try{
                
        const userData = await users.findOne({_id:userid},{password:0})
        res.status(200).json(userData)
        
    }catch(err)
    {
        res.status(401).json(err)
    } 
}
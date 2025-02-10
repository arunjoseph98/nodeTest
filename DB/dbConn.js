const mongoose = require('mongoose')

mongoose.connect(process.env.DBSTR).then(()=>{
    console.log("db connected...");
    
}).catch(err=>{
    console.log("db connection failed...");
})
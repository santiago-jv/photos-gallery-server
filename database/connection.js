const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI).then(()=>{
    console.log("Database connected")
})
process.on('uncaughtException',()=>{
    mongoose.disconnect
})

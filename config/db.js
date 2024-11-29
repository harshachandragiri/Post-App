const mongoose=require('mongoose')
let MONGODB_URL=process.env.MONGODB_URL

exports.connectDb=async()=>{
    await mongoose.connect(MONGODB_URL)
    console.log("DataBase is Connect");
}
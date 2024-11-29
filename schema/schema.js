const {model,Schema,}=require('mongoose')
// const mongoose=require('mongoose');

let postSchema=new Schema({
    post:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.hJ_MDw1k9mF2piHpxvIodAHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    postedBy:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=model("Post",postSchema)
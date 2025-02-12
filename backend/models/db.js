const mongoose=require('mongoose')
const mongodb_url=process.env.MONGO_URL;

mongoose.connect(mongodb_url)
.then(()=>{
    console.log("mongoDB connected")
})

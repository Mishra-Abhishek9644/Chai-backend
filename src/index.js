import "dotenv/config";
import connectDB from "./db/index.js";



connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`The Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("Db Connection Error in index.js file",err)
})









// import express from "express" 
// const app = express()                          

// ( async () =>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", ()=>{
//         console.log("errr",error);
//         throw error
//        })

//        app.listen(process.env.PORT,() => {
//         console.log(`app is listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("errror",error)
//         throw err
//     }
// })()
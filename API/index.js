
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();


app.use(cors()); 
app.use(cookieParser()); 
dotenv.config();
const PORT=process.env.PORT;
const db=process.env.DATABASE;
 const connect = async () => {
    try {
     await mongoose.connect(db,{});
      console.log("Connected to mongoDB.");
      
      } catch (error) {  
              throw error;
     }
   };
mongoose.connection.on("disconnected",()=>{
    console.log("MOngoDB disConnected")
})
// mongoose.connection.on("connected",()=>{
//     console.log("MOngoDB  Connected")
// })
// mongoose.connect(db,{}).then(()=>{
//     console.log("Connected to mongoDB.");
// }).catch(()=>{
//     throw error;
// })
app.get('/',(req,res)=>{
    res.send("Hello First request ")
})

//middlewares
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
    const errorstatus=err.status|| 500
    const errormsg=err.message|| "Something went wrong"
   return res.status(errorstatus).json({
    success: false,
    status :errorstatus,
    message: errormsg,
    stack: err.stack
   });
});

app.listen(PORT,()=> {
    connect();
console.log("connected to Banckend!!!!!!!!");
});
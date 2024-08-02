// import mongoose from "mongoose";
// export const connectDB=async()=>{
//     (await mongoose.connect('mongodb+srv://ganesha:ganesha1@cluster0.xqasyfp.mongodb.net/food-del')).isObjectIdOrHexString(()=>console.log("DB Connected"));

// }
import mongoose from "mongoose";
import dotenv from "dotenv";
export const connectDB=async()=>{
    (await mongoose.connect(process.env.MONGODB_URL)).isObjectIdOrHexString(()=>console.log("DB Connected"));

}

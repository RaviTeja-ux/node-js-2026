import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
       },
    age:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
 })

 const Teacher = mongoose.model('teacher', teacherSchema)

 export default Teacher;
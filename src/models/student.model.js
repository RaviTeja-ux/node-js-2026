import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    class: {
        type: Number,
        required: true
    }
})

const Student = mongoose.model('student', studentSchema)

export default Student;
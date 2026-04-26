import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/school');
        console.log('connected to mongodb')
    } catch (error) {
        console.log(error)
    }
}

export default connect
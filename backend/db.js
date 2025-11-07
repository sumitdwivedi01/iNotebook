import mongoose from 'mongoose';
const mongoURI ='mongodb://localhost:27017/inotebook';

const connectToMongo= async ()=>{
    try {
        await mongoose.connect(mongoURI , {
        });
        console.log("connected to mongooes");
        
    } catch (error) {
        console.log(error);
    }
};

export default connectToMongo;
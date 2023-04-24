import mongoose from "mongoose";


const connectDB = async () =>{

try{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`succeses ${conn.connection.host}`.bgGreen)

}catch(error){
    console.log(`error ${error}`)
}
};

export default connectDB;
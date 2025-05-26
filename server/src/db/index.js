let mongoose = require("mongoose");


const connectDB = async()=>{
    try{
        const connInstance = await mongoose.connect(`${process.env.DBURL}`);
        console.log(`DATABASE CONNECTED..!! HOST: ${connInstance.connection.host}`);
        
    }catch(err){
        console.log("MONGO-DB connection FAILED : ",err);
        process.exit(1); 
    }
}

module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://dheerajrajput1232:Dheeraj123@cluster0.2zwuols.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
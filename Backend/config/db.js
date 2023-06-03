const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://dheeraj:Dheeraj1234@cluster0.4ipinrx.mongodb.net/Chataap?retryWrites=true&w=majority", {
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
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://KanishkaRajput:khushy1234@cluster0.516ub.mongodb.net/chatApp?retryWrites=true&w=majority'", {
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
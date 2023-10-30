const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected To MOngoDB database");
    } catch (err) {
        console.log(`Error in DataBASE ${err}`);
    }
}

module.exports = connectDB; 
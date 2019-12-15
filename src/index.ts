import mongoose from 'mongoose';
import dotenv from "dotenv";

console.log("Setting up Environment");
dotenv.config();

console.log("Starting API");

// Connect to MongoDB
const dbURL = "mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/digitaldoorsign";
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
	console.log("Connected to Mongoose Database");
});

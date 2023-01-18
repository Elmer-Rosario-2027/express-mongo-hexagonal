import mongoose from "mongoose";
import { MONGODB_CNN } from '../config/configure'

mongoose.set("strictQuery", true);
const dbConnection = async () => {
	mongoose
		.connect(MONGODB_CNN)
		.then(() => {
			console.log("Mongo connected");
		})
		.catch((err) => {
			console.log(err);
			throw new Error("Cannot start mongo connection");
		});
};

export default dbConnection;

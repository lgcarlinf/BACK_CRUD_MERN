import mongoose from "mongoose";

const connectDb = (url: string) => {
  console.log("Connecting to database");
  console.log(url);
  return mongoose.connect(url);
};

export default connectDb;

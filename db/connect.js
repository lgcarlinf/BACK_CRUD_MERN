import mongoose from "mongoose";

const connectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
  });
};

export default connectDb;

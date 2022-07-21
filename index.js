import express from "express";
import connectDb from "./db/connect.js";
import dotenv from "dotenv/config";
import router from "./routes/itemRoute.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4001;

//Middleware
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

//Route
app.use("/api/v1/crud", router);

//Connection
const start = async () => {
  try {
    await connectDb(process.env.MONGO_CONNECT);
    app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.status(200).send("Inicio");
});
start();
console.log(process.env.MONGO_CONNECT);

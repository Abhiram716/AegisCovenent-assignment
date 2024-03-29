import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import accountRouter from "./api/routes/accounts-router.js";
import router from "./api/routes/flight-list-router.js";
import authRouter from "./api/routes/auth-router.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
    // Start your application logic here...
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
//form-urlencoded

app.use("/flight", router);

app.use("/accounts", accountRouter);

app.use("/access-tokens", authRouter);

app.get("/", async (req, res) => {
  res.send("Hello world");
});
app.listen(process.env.PORT | 8000);

export default app;

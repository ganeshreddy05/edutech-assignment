import express from "express";
import cors from "cors";
import schoolRoutes from "./routes/schoolRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

 app.use("/", schoolRoutes);



app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;
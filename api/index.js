import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

const PORT = process.env.PORT_URL || 8800;

app.use(express.json());
app.use(cors());

app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log("Connected!");
});

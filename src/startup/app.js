import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

/** express middlewares */
app.use(cors());

export default app;

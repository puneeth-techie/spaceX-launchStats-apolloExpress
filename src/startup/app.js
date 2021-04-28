import express from "express";
import dotenv from "dotenv";
import cors from "cors";

/** init .env */
dotenv.config();

/** init express */
const app = express();

/** express middlewares */
app.use(cors());

export default app;

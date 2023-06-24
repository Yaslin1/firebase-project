import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { addNewJewelry, getAllJewelry, updateJewelryById } from "./src/jewelry.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req,res) => res.send ("It's working"));

app.get("/jewelry", getAllJewelry);
app.post("/jewelry", addNewJewelry);
app.patch("/jewelry", updateJewelryById);

//Cloud Function

export const api = onRequest (app)
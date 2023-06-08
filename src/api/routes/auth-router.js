import express from "express";
import { createAcessTokens } from "../controllers/acess-tokens-controller.js";

const authRouter = express.Router();

authRouter.post("/", createAcessTokens);

export default authRouter;

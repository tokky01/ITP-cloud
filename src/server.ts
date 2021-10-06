import http from "http";
import express from "express";
import { compute } from "./compute";

export const app = express();

app.use(express.json());

app.post("/compute", (req, res) => {
  const game = req.body.game;
  // TODO: Validate input

  const score = compute(game);

  // TODO: Return response
});

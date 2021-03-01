import { express } from "../../utils/express";
import { ParseAPI } from "./ParseAPI";

const parseApi = new ParseAPI();

export const v2api = express
  .Router()
  .options("/parse", (req, res, next) => parseApi.options(req, res, next))
  .post("/parse", (req, res) => parseApi.post(req, res))
  .use((_, res) => {
    res.status(404).json({ statusCode: 404, message: "API v2 - Not Found" });
  });

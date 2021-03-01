import { express } from "../utils/express";
import { v1api } from "./v1";
import { v2api } from "./v2";

export const middleware = express().use("/v1", v1api).use("/v2", v2api);

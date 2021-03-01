import { middleware } from "./api";
import { express } from "./utils/express";
import { notFound } from "./routes/notFound";
import { apiNotFound } from "./api/apiNotFound";
import { json } from "body-parser";

const { PORT = 3000 } = process.env;

express()
  .use("/api", json(), middleware, apiNotFound)
  .use(notFound)
  .listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });

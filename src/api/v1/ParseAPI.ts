import { BaseApi } from "../core/BaseApi";

export class ParseAPI extends BaseApi {
  version = "1.0";

  post({ body }, res) {
    if (typeof body?.data !== "string") {
      return res
        .status(500)
        .json({ statusCode: 500, message: "InvalidBodyType" });
    }

    const match = String(body?.data).match(/^([A-Z]+0+)([A-Z]+0+)(\d+)$/i);
    if (!match) {
      return res.status(500).json({ statusCode: 500, message: "ParserError" });
    }

    const [_, firstName, lastName, clientId] = match;
    res.json({
      statusCode: 200,
      data: { firstName, lastName, clientId },
    });
  }
}

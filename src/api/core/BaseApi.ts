import { NextFunction, Request, Response } from "express";

export class BaseApi {
  private static _instance: BaseApi = new BaseApi();
  static get instance() {
    return this._instance || (this._instance = new BaseApi());
  }

  version: string = "0.0";

  options(req: Request, res: Response, next: NextFunction) {
    const methods = ["OPTIONS"];
    if (this.post !== BaseApi.instance.post) {
      methods.push("POST");
    }
    if (this.get !== BaseApi.instance.get) {
      methods.push("GET");
    }
    if (this.put !== BaseApi.instance.put) {
      methods.push("PUT");
    }
    if (this.patch !== BaseApi.instance.patch) {
      methods.push("PATCH");
    }
    if (this.delete !== BaseApi.instance.delete) {
      methods.push("DELETE");
    }
    const { version } = this;
    res.send({ version, methods });
  }

  post(req: Request, res: Response, next: NextFunction): void {
    res.json({ statusCode: 200, message: "Ok" });
  }

  get(req: Request, res: Response, next: NextFunction) {
    res.json({ statusCode: 200, message: "Ok" });
  }

  put(req: Request, res: Response, next: NextFunction) {
    res.json({ statusCode: 200, message: "Ok" });
  }

  patch(req: Request, res: Response, next: NextFunction) {
    res.json({ statusCode: 200, message: "Ok" });
  }

  delete(req: Request, res: Response, next: NextFunction) {
    res.json({ statusCode: 200, message: "Ok" });
  }
}

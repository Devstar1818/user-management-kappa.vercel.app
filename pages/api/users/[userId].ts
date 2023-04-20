import connectMongo from "../../../database/connect";
import { getUser, deleteUser, updateUser } from "../../../database/controller";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(() =>
    res.status(404).json({ error: "Connection is Failed" })
  );

  switch (req.method) {
    case "GET":
      getUser(req, res);
      break;
    case "PUT":
      updateUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`method ${req.method} Not Allowed`);
      break;
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../database/connect";
import { getUsers, addUser } from "../../../database/controller";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(() =>
    res.status(401).json({ error: "Connection is Failed" })
  );

  switch (req.method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      addUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}

import { prisma } from "../../../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function loginCustomer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const JWT_KEY: any = process.env.JWT_KEY;
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const body = req.body;
        const user = await prisma.shopCustomers.findUnique({
          where: {
            email: body.email,
          },
        });
        if (!user) {
          return res.status(400).end(`Wrong email or password`);
        }

        const passwordMatched = await bcrypt.compare(
          body.password,
          user.password
        );

        if (!passwordMatched) {
          return res.status(400).end(`Wrong email or password`);
        }

        const payload = {
          id: user.id,
          email: user.email,
          createdAt: user.createdAt,
        };

        jwt.sign(payload, JWT_KEY, { expiresIn: 7200 }, (_err, token) => {
          res.status(200).json({
            success: true,
            username: user.username,
            access_token: "Bearer " + token,
            expired_at: 7200,
          });
        });
      } catch (error) {
        res.status(400).json({
          errorCode: 1,
          message: `error: ${error}`,
        });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

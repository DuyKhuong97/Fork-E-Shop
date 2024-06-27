import { prisma } from "../../../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function registerCustomer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const JWT_KEY: any = process.env.JWT_KEY;

  switch (method) {
    case "POST":
      try {
        // get the title and content from the request body
        const saltOrRound = 10;
        const customer = req.body;

        const currentUser = await prisma.shopCustomers.findUnique({
          where: {
            email: customer.email,
          },
        });

        if (currentUser) {
          return res.status(400).json(`Email is available`);
        }

        const hashedPassword = await bcrypt.hash(
          customer.password,
          saltOrRound
        );
        // use prisma to create a new post using that data
        const newCustomer = await prisma.shopCustomers.create({
          data: {
            email: customer.email,
            password: hashedPassword,
            username: customer.username,
            gender: customer.gender,
            last_name: customer.last_name,
            first_name: customer.first_name,
            postal_code: customer.postal_code,
          },
          select: {
            id: true,
            username: true,
            createdAt: true,
          },
        });

        const payload = {
          id: newCustomer.id,
          username: newCustomer.username,
          createdAt: newCustomer.createdAt,
        };

        if (newCustomer) {
          jwt.sign(payload, JWT_KEY, { expiresIn: 7200 }, (_err, token) => {
            res.status(200).json({
              success: true,
              name: customer.name,
              access_token: "Bearer " + token,
              expired_at: 7200,
            });
          });
        }
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

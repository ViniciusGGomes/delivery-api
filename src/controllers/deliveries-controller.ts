import { Request, Response } from "express";
import z from "zod";
import { prisma } from "../database/prisma";

class DeliveriesController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      user_id: z.string().uuid(),
      description: z.string(),
      status: z.enum(["processing", "shipped", "delivered"]).optional(),
    });

    const { user_id, description, status } = bodySchema.parse(request.body);

    const delivery = await prisma.delivery.create({
      data: {
        userId: user_id,
        description,
        status: status ?? "processing",
      },
    });

    return response.status(201).json(delivery);
  }

  async index(request: Request, response: Response) {
    const delivery = await prisma.delivery.findMany({
      include: {
        user: { select: { name: true, email: true } },
      },
    });

    return response.json(delivery);
  }
}

export { DeliveriesController };

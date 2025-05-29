import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("DeliveriesController", () => {
  let token: string;
  let user_id: string;
  let delivery_id: string;

  beforeAll(async () => {
    // Cria usuário com role "sale"
    const userResponse = await prisma.user.create({
      data: {
        name: "Delivery Test User",
        email: "delivery_test_user@example.com",
        password: await require("bcrypt").hash("password123", 8),
        role: "sale",
      },
    });

    user_id = userResponse.id;

    // Faz login pra pegar token
    const sessionResponse = await request(app).post("/sessions").send({
      email: "delivery_test_user@example.com",
      password: "password123",
    });

    token = sessionResponse.body.token;
  });

  it("should create a delivery successfully", async () => {
    const deliveryResponse = await request(app)
      .post("/deliveries")
      .set("Authorization", `Bearer ${token}`)
      .send({
        user_id,
        description: "Entrega de teste",
      });

    expect(deliveryResponse.status).toBe(201);

    delivery_id = deliveryResponse.body.id;
    console.log("delivery_id:", delivery_id);
  });

  afterAll(async () => {
    if (user_id) {
      await prisma.delivery.deleteMany({
        where: { userId: user_id },
      });

      await prisma.user.delete({
        where: { id: user_id },
      });
    }
  });
});

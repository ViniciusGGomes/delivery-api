import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";
import bcrypt from "bcrypt";

describe("DeliveryLogsController", () => {
  let token: string;
  let user_id: string;
  let delivery_id: string;
  let delivery_log_id: string;

  beforeAll(async () => {
    // Cria usuário com role "sale"
    const user = await prisma.user.create({
      data: {
        name: "Log Test User",
        email: "log_test_user@example.com",
        password: await bcrypt.hash("password123", 8),
        role: "sale",
      },
    });

    user_id = user.id;

    // Faz login para obter o token
    const sessionResponse = await request(app).post("/sessions").send({
      email: "log_test_user@example.com",
      password: "password123",
    });

    token = sessionResponse.body.token;

    // Cria uma entrega válida
    const deliveryResponse = await request(app)
      .post("/deliveries")
      .set("Authorization", `Bearer ${token}`)
      .send({
        user_id,
        description: "Entrega para teste de log",
        status: "shipped",
      });

    delivery_id = deliveryResponse.body.id;

    const deliveryFromDb = await prisma.delivery.findUnique({
      where: { id: delivery_id },
    });
    console.log("Status da entrega no banco:", deliveryFromDb?.status);
  });

  it("should create a delivery log successfully", async () => {
    const logResponse = await request(app)
      .post("/delivery-logs")
      .set("Authorization", `Bearer ${token}`)
      .send({
        delivery_id,
        description: "Primeira atualização da entrega",
      });

    expect(logResponse.status).toBe(200);
    expect(logResponse.body).toHaveProperty("id");
    expect(logResponse.body.description).toBe(
      "Primeira atualização da entrega"
    );

    delivery_log_id = logResponse.body.id;
  });

  // it("should not create a log if delivery does not exist", async () => {
  //   const fakeId = "00000000-0000-0000-0000-000000000000";

  //   const response = await request(app)
  //     .post("/delivery-logs")
  //     .set("Authorization", `Bearer ${token}`)
  //     .send({
  //       delivery_id: fakeId,
  //       description: "Teste com entrega inexistente",
  //     });

  //   expect(response.status).toBe(404);
  //   expect(response.body.message).toBe("delivery not found");
  // });

  afterAll(async () => {
    if (delivery_log_id) {
      await prisma.deliveryLog.deleteMany({
        where: { deliveryId: delivery_id },
      });
    }

    if (delivery_id) {
      await prisma.delivery.delete({
        where: { id: delivery_id },
      });
    }

    if (user_id) {
      await prisma.user.delete({
        where: { id: user_id },
      });
    }
  });
});

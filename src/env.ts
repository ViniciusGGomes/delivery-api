import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(3333), // Garanti que esse valor seja convertido para um número. caso não seja definido nada na variável de ambiente o valor da porta padrão será 3333
});

export const env = envSchema.parse(process.env);

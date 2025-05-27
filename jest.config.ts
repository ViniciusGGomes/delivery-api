import type { Config } from "jest";

const config: Config = {
  bail: true,
  clearMocks: true, 
  preset: "ts-jest", 
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;

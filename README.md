# 📦 Delivery API

Uma API RESTful desenvolvida com **Node.js + TypeScript** para gerenciar um sistema de entregas, com foco em autenticação e autorização, controle de acesso por perfis, registro de pedidos e histórico de movimentações.

---

## 🚀 Visão Geral

A **Delivery API** é uma solução completa para sistemas de entregas com dois tipos de usuários:

- **Vendedor (`sale`)**: responsável por criar pedidos, atualizar status, e criar log da entrega do pedido.
- **Cliente (`customer`)**: pode visualizar os pedidos e acompanhar o andamento.

A API permite:

- Cadastro e login de usuários com perfis distintos
- Autenticação e autorização via **JWT**
- Registro e atualização de pedidos com status:
  - `processing`, `shipped`, `delivered`
- Registro de **logs completos de movimentações** dos pedidos

---

## 🧭 Fluxo da Aplicação

> Representação visual do fluxo principal da API de entregas (cadastro, login, criação e acompanhamento de pedidos):

![Image](https://github.com/user-attachments/assets/2e8ed05d-f998-4a58-8a4c-9600f64a0128)

---

## 🗂️ Estrutura do Banco de Dados

> Diagrama das tabelas e seus relacionamentos no banco de dados PostgreSQL:

![Estrutura do Banco de Dados](https://private-user-images.githubusercontent.com/161797273/449358648-4f4409ea-6c9c-4d25-a284-95a63c5814d7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg2MzE4NDEsIm5iZiI6MTc0ODYzMTU0MSwicGF0aCI6Ii8xNjE3OTcyNzMvNDQ5MzU4NjQ4LTRmNDQwOWVhLTZjOWMtNGQyNS1hMjg0LTk1YTYzYzU4MTRkNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUzMFQxODU5MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MTAyMzE2N2MzMzc3MzRmYmE1OTQzYjU5ZDQ1MTQxMmY1ZTg4N2IxNWUxM2IzNDBjNGFjNDhmMGM3NTI5ZjQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Q8OqJDMEpAjsx4dPBgfQyl2VIXty3MaCG7ADcfPfxJU)

---

## 🗂️ Preview da Aplciação

![preciew da aplciação](https://private-user-images.githubusercontent.com/161797273/449358879-52fe8f62-2226-4644-b01a-98145a3a89e9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg2MzE4NDEsIm5iZiI6MTc0ODYzMTU0MSwicGF0aCI6Ii8xNjE3OTcyNzMvNDQ5MzU4ODc5LTUyZmU4ZjYyLTIyMjYtNDY0NC1iMDFhLTk4MTQ1YTNhODllOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUzMFQxODU5MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNjBlMmM1M2VkYWYxNmFlMjUxMmVkMzBlOWI2Mjg0NTU4NGE3Nzk0ZGI4MjE1MDQwZjQwNDU1ODA2M2M0MTBhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ZpWFN3sHiDPPCOIuKEmPQT1ThVEB1R-5aT-bAyIC6es)

## 🛠️ Tecnologias Utilizadas

- **Node.js + TypeScript**
- **Express** (com `express-async-errors`)
- **PostgreSQL** (via Docker)
- **Prisma ORM**
- **JWT** para autenticação
- **bcrypt** para hashing de senhas
- **Zod** para validação de dados
- **Jest + SuperTest** para testes automatizados

Ferramentas auxiliares:

- **Docker** (container PostgreSQL)
- **Prisma Studio**
- **Insomnia** (testador de API)

---

## 🧠 Estrutura Modular

- **Controladores organizados por domínio de responsabilidade** (`controllers`)
- **Rotas divididas por recurso** (`users`, `deliveries`, `sessions`, `logs`)
- **Middlewares reutilizáveis** para autenticação, autorização e tratamento de erros
- **Organização clara** que facilita manutenção, testes e escalabilidade

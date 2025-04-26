
# 🏎️ API de Pilotos de Fórmula 1 - Node.js + Fastify + TypeScript

**Construa sua própria escuderia de Fórmula 1!**  
Este projeto cria uma API leve, rápida e eficiente utilizando Node.js, Fastify e TypeScript.

## 🚀 Como Rodar o Projeto

1. Clone o repositório ou baixe o ZIP.
2. No terminal, entre na pasta do projeto.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Para rodar em modo desenvolvimento:
   ```bash
   npm run dev
   ```
5. Para rodar em produção:
   ```bash
   npm run build
   npm start
   ```

Servidor rodando em: `http://localhost:3333`

---

## 🎯 Funcionalidades

- **POST /drivers** → Criar novo piloto
- **GET /drivers** → Listar todos pilotos
- **GET /drivers/:id** → Buscar piloto por ID
- **PUT /drivers/:id** → Atualizar piloto existente
- **DELETE /drivers/:id** → Remover piloto

---

## 🛠️ Tecnologias Usadas

- Node.js
- Fastify
- TypeScript
- ts-node-dev (modo desenvolvimento)

---

## ✨ Melhorias Futuras

- Implementar banco de dados real (Ex: MongoDB ou PostgreSQL).
- Usar ORM como Prisma ou TypeORM.
- Implementar autenticação JWT para usuários.
- Adicionar paginação de resultados.
- Melhorar a análise de dados dos pilotos.

*Os pontos de expansão estão comentados no código, para facilitar futuras integrações!*

---

## 📝 Inspiração

Projeto feito por mim e inspirado no desafio prático da DIO:  
[https://github.com/digitalinnovationone/node-formula-1](https://github.com/digitalinnovationone/node-formula-1)

---

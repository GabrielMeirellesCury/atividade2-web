# Poções & Soluções

Site de vendas da loja "Poções e Soluções", de Annabelle Merigold. Desenvolvido como parte da Atividade Prática 2 da disciplina SCC0219 - Introdução ao Desenvolvimento Web.

## Tecnologias

**Backend:** Node.js, Express, Sequelize, SQLite (em memória)  
**Frontend:** React, Vite, Axios, React Router DOM

## Estrutura do Projeto

```
atividade2-web/
├── backend/
│   ├── controllers/
│   │   └── potion.controller.js
│   ├── models/
│   │   └── potion.model.js
│   ├── routes/
│   │   └── api.routes.js
│   ├── dbconfig.js
│   ├── server.js
│   └── package.json
└── frontend/
    └── Potions/
        ├── src/
        │   ├── api/
        │   │   └── potions.api.js
        │   ├── components/
        │   │   ├── routes/
        │   │   │   └── MyRoutes.jsx
        │   │   ├── Potion.jsx
        │   │   ├── PotionAdmin.jsx
        │   │   ├── PotionForm.jsx
        │   │   └── PotionList.jsx
        │   ├── App.jsx
        │   ├── App.css
        │   └── main.jsx
        └── package.json
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

## Como executar

### 1. Backend

```bash
cd backend
npm install
node server.js
```

O servidor irá iniciar em `http://localhost:3000`. O banco de dados SQLite é criado em memória e populado automaticamente com as poções de exemplo a cada inicialização.

> **Atenção:** por usar banco em memória, os dados cadastrados durante o uso são perdidos ao reiniciar o servidor.

### 2. Frontend

Em outro terminal:

```bash
cd frontend/Potions
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

## Páginas

| Página | URL | Descrição |
|---|---|---|
| Loja | `http://localhost:5173/pocoes` | Página pública com descrição da loja, histórico e lista de poções disponíveis |
| Admin | `http://localhost:5173/admin` | Página de administração para cadastrar e remover poções |

> **Nota:** não há autenticação implementada nesta entrega. A página de administração é acessível diretamente pela URL.

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/pocoes` | Lista todas as poções |
| POST | `/api/pocoes` | Cadastra uma nova poção |
| DELETE | `/api/pocoes/:id` | Remove uma poção pelo ID |

### Exemplo de body para POST

```json
{
  "name": "Poção da Boa Nota",
  "description": "Garante aprovação em qualquer disciplina por 24 horas.",
  "image": "https://url-da-imagem.png",
  "price": 999
}
```

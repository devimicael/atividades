import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
    response.json({mensagem:"Rota get criada: olá, mundo!"});
});

export default router;
import express from "express";

const router = express.Router();

router.post("/", (request, response) => {
   const {name} = request.body;
   response.json({mensagem:`post: olá, ${name}`});
});

export default router;
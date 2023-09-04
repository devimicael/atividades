import express from "express";
import rtGet from "./routers/routGet.js";
import rtPost from "./routers/routPost.js";

const port = 3000;
const app = express();
app.use(express.json());

app.use("/local/get", rtGet);
app.use("/local/post", rtPost);
app.listen(port, ()=>console.log(`servidor na porta:${port}`));
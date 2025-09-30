import e from "express";
import { io } from "../../index.js";
export async function loginRouter() {

const router = e.Router();

router.get("/login", (req, res) => {
    io.emit("teste", "Olá do servidor!");
    res.json({ message: "Rota de api aq" });
});


}
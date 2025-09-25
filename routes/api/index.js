import e from "express";
const router = e.Router();

router.get("/", (req, res) => {
    res.json({ message: "Rota de api aq" });
});

export default router;
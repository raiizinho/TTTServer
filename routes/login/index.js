import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import e from "express";
import UserSite from "../../models/UserSite.js";
const ACCESS_SECRET = process.env.ACCESS_SECRET;

const router = e.Router();

router.get("/", (req, res) => {
    res.json({ message: "Rota de login aq" });
});
function generateAccessToken(user) {
    return jwt.sign({ userId: user._id, username: user.username }, ACCESS_SECRET, { expiresIn: '1d' });
}
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if (!token) return res.sendStatus(401);

    jwt.verify(token, ACCESS_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

router.post("/login", async (req, res) => {
    var { username, password } = req.body;
    var user = await UserSite.findOne({username})
    if (user) return res.json({status: 409, message: "Usuário já existe"})
})


export default router;
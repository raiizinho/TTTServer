import e from "express";
import colors from "colors";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.URI_MONGODB).then((c) => {
    console.log(colors.green("Conectado ao banco de dados"));
})

import loginRouter from "./routes/login/index.js";

const app = e();

// CONSOLE LOG
app.use((req, res, next) => {
    if (req) {
        if ([".css", ".js", ".html", ".ico", "uptime", ".jpg", ".png", ".gif"].some((ext) => req.originalUrl.endsWith(ext))) return next()
        console.log(colors.blue(`==============================\n\n- REQUISIÇÃO PARA: ${colors.green(req.originalUrl)}\n\n${colors.blue(`- IP: ${colors.green(req.ip)}`)}\n\n==============================\n`))
        next()
    }
})

// middleware
app.use(e.json())
app.set("json spaces", 4)

// Rotas 
app.use("/login", loginRouter); // login route
app.use("/api", loginRouter(io)); // api route

// Configuração CORS para Express
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

const server = http.createServer(app);

// Configuração CORS para Socket.IO
export const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Usuário conectado", socket.id);

    socket.on("disconnect", () => {
        console.log("Usuário desconectado", socket.id);
    });
});

app.get("/", (req, res) => {
    res.json({ opa: "amigo" });
});

server.listen(25508, "0.0.0.0", () => {
    console.log("rodando na porta http://localhost:25508");
});

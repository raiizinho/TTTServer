import e from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = e();

// Configuração CORS para Express
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

const server = http.createServer(app);

// Configuração CORS para Socket.IO
const io = new Server(server, {
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

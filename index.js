import e from "express";
import http from "http";
import { Server } from "socket.io";
const app = e();
const server = http.createServer(app);
const io = new Server(server)

io.on("connection", (socket) => {
    console.log("Usuário conectado", socket.id);

    socket.on("disconnect", () => {
        console.log("Usuário desconectado", socket.id);
    });
})
app.get("/", (req, res) => {
  res.json({opa: "amigo"});
});

app.listen(25508, "0.0.0.0", () => {
  console.log("rodando na porta http://localhost:25508");
});
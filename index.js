import e from "express";
import http from "http";
import WebSocket from "ws";
const app = e();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log(`Mensagem recebida => ${message}`);
        ws.send(`Echo: ${message}`);
    });
    ws.send("Servidor ligado, porra!");
})
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(25508, "0.0.0.0", () => {
  console.log("Server is running on port 25508");
});
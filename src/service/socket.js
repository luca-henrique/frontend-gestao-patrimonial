import Ws from "@adonisjs/websocket-client";

const local = "ws://127.0.0.1:3333";

const ws = Ws(local);

ws.connect();

export default ws;

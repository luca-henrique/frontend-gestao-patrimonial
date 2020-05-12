import Ws from "@adonisjs/websocket-client";

const local = "ws://127.0.0.1:3333";

export class SocketConnection {
  connect() {
    this.ws.connect();

    this.ws = Ws(local);

    this.ws.on("open", () => {
      console.log("Vrauu");
    });

    this.ws.on("close", () => {});

    return this;
  }
}

export default new SocketConnection();

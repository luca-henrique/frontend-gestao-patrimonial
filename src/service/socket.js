import Ws from "@adonisjs/websocket-client";

const local = "ws://127.0.0.1:3333";

export class SocketConnection {
  connect() {
    this.ws = Ws(local);
    this.ws.connect();
    return this;
  }

  subscribe(channel, handler) {
    if (!this.ws) {
      setTimeout(() => this.subscribe(channel), 1000);
    } else {
      const result = this.ws.subscribe(channel);

      result.on("message", (message) => {
        // console.log("Incoming", message);
        try {
          handler(message);
        } catch (err) {}
      });

      result.on("error", (error) => {
        // console.error(error);
      });

      return result;
    }
  }
}

export default new SocketConnection();

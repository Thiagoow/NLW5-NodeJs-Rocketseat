import { http } from "./http";
import "./websocket/client";

//Minha porta default utilizada para o desenvolvimento
http.listen(3333, () =>
  console.log("Our server is ONLINE, and running on port 3333 🤩")
);

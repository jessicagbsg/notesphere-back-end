import http from "http";
import { app } from "./app";
import { dbConnection } from "./database/db";
import { setUpSocket } from "./socket";

const server = http.createServer(app);

setUpSocket(server);
dbConnection();
server.listen(process.env.PORT ?? 3000, () => console.log(`Server running at ${process.env.PORT}`));

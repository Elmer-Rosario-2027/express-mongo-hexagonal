import dbConnection from "./config/database";
import Server from "./config/server";

// connect to database
dbConnection();

// start express server
new Server().listen();

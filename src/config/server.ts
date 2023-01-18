import cors from "cors";
import express, { Express } from "express";

import myModuleRoutes from "../mymodule/infrastructure/routes/mymodule.routes";

class Server {
	public app: Express;

	constructor() {
		this.app = express();
		this.app.set("port", process.env.APP_PORT || 3000);

		// basic middleware with cors, json and url encoded
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		// configure routes
		this.configureRoutes();
	}

	public listen() {
		this.app.listen(this.app.get("port"), () => {
			console.log(
				"  App is running at http://localhost:%d in %s mode",
				this.app.get("port"),
				this.app.get("env")
			);
			console.log("  Press CTRL-C to stop\n");
		});
	}


	private configureRoutes() {
		this.app.use("/v1", myModuleRoutes);
	}
}

export default Server;

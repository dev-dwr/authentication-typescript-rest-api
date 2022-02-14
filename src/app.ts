require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const port = config.get<number>("port");
const app = express();

app.use(express.json());
app.use(deserializeUser);
app.use(router);

app.listen(port, () => {
    log.info(`App started at http://localhost:${port}`);
    connectToDb();
});
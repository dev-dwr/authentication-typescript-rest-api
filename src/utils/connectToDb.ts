import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connectToDb() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    log.info("Db connected");
  } catch (err: any) {
    process.exit(1); // if we catch an error we shall exit with failure
  }
}

export default connectToDb;

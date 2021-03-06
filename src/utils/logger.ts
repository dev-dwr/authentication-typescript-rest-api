import logger from "pino";
import daysjs from "dayjs";
import config from "config";

const logLevel = config.get<string>("logLevel");

const log = logger({
  transport: {
    target: "pino-pretty",
  },
  level: logLevel,
  base: {
    pid: false, //do not print process id
  },
  timestamp: () => `,"time":"${daysjs().format()}"`
});

export default log;
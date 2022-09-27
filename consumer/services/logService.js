import Configs from "../configs/queue.js"

const now = () => new Date().toLocaleString(Configs.DATE_FORMAT);

export default class LogService {
    static error(message) {
        console.error(`[ERROR] - [${now()}] - ${message}`)
    }

    static warn(message) {
        console.warn(`[WARN] - [${now()}] - ${message}`)
    }

    static info(message) {
        console.info(`[INFO] - [${now()}] - ${message}`)
    }
}
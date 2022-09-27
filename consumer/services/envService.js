import ArgsService from "./argsService.js"
import dotenv from 'dotenv'

export default class EnvService {
    async loadEnvVariables() {
        const args = new ArgsService();

        const env = `${args.read("ENV")}`.toLowerCase().trim()
        const envfile = env ? `.${args.read("ENV")}.env` : ".env"

        return Promise.resolve(dotenv.config({ path: envfile }))
    }

    isDev() {
        const args = new ArgsService();
        const env = `${args.read("ENV")}`.toLowerCase().trim()
        return env === "dev"
    }
}
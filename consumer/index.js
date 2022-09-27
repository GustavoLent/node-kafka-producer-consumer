import QueueService from "./services/queueService.js"
import EnvService from "./services/envService.js";

(async () => {
    const env = new EnvService();
    await env.loadEnvVariables();

    const queue = new QueueService();

    queue.connect();
    queue.startListening();
    queue.onReceiveData(function (data) {
        const buff = Buffer.from(data.value);
        const stringified = buff.toString()
        const obj = JSON.parse(stringified)

        console.log(`received message: ${stringified}`);
    })
})()
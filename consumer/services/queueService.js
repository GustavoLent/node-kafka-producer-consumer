import Kafka from 'node-rdkafka';
import Configs from "../configs/queue.js"
import EnvService from './envService.js';
import LogService from './logService.js';

export default class QueueService {
    constructor() {
        this.listener = this.init();
        this.envService = new EnvService();
    }

    init() {
        return new Kafka.KafkaConsumer({
            'group.id': Configs.QUEUE_GROUP_IP,
            'metadata.broker.list': Configs.QUEUE_ADDRESSES,
        }, {});
    }

    connect() {
        this.listener.connect();
    }

    startListening() {
        const { envService, listener } = this

        listener.on(Configs.QUEUE_EVENT_READY, () => {
            LogService.info("Will start the listener...");

            const subscriptions = `${Configs.QUEUE_SUBSCRIPTIONS}`.split(/\s*,\s*/)
            listener.subscribe(subscriptions);
            if (envService.isDev()) {
                LogService.info(`Will listen the subscriptions: ${subscriptions}`);
            }

            listener.consume();
            LogService.info("Started listening!");
        })
        LogService.info(``);
    }

    onReceiveData(callback) {
        this.listener.on(Configs.QUEUE_EVENT_DATA, callback);
    }
}
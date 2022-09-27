export default {
    QUEUE_GROUP_IP: process.env.QUEUE_GROUP_IP || "kafka",
    QUEUE_ADDRESSES: process.env.QUEUE_ADDRESSES || "localhost:9092",
    QUEUE_SUBSCRIPTIONS: process.env.QUEUE_SUBSCRIPTIONS || "localhost:9092",
    QUEUE_EVENT_READY: process.env.QUEUE_EVENT_READY || "ready",
    QUEUE_EVENT_DATA: process.env.QUEUE_EVENT_DATA || "data",
}
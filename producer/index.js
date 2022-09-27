import Kafka from 'node-rdkafka';
import { Buffer } from 'node:buffer'

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {
  topic: 'test'
});

stream.on('error', (err) => {
  console.error('Error in our kafka stream');
  console.error(err);
});

function queueMessage() {
  const obj = { "name": "Gustavo", "course": "BCC" }
  const stringified = JSON.stringify(obj)
  const buff = Buffer.from(stringified);

  const response = stream.write(buff);

  if (response) {
    console.log(`Message queued: "${stringified}"`);
  } else {
    console.log('Too many messages in the queue already..');
  }
}

setInterval(() => {
  queueMessage();
}, 3000);

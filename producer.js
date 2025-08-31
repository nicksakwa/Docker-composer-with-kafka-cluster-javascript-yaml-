const { kafka }= require('./kafka');
const kafka = new kafka({
    clientId:'my-app'
    brokers:['localhost:9092']
});

const producer = kafka.producer();
const runProducer = async ()=>{
    await producer.connect();
    console.log('Producer connected');

    await producer.send({
        topic: 'test-topic',
        message:[
            { value:'hello, Kafka! This is a test message.'}
        ]
    });
    console.log('message sent successfully');
    await producer.disconnect();
};

runProducer(),catch(console.error);
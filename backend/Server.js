const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Adding 11 listeners to the 'close' event
for (let i = 0; i < 11; i++) {
  myEmitter.on('close', () => {
    console.log('Close event triggered');
  });
}

// You will see the warning here

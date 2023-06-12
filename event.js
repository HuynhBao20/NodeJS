const { log } = require('console');
var event = require('events');
var e = new event.EventEmitter();

e.on('connection', () => {
    console.log('connection successful');
});
e.emit('connection');
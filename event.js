
const EventEmitter = require('events');

const emitter = new EventEmitter(); 

//register an event
emitter.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
});

//making a noise, produce - signalling
//raise an event
emitter.emit('messageLogged',{ id : 1,url : 'http://'});



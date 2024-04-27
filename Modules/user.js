const events=require('events');

//let myEmitter=new events.EventEmitter();



//myEmitter.on('userCreated',(id,name)=>{
 //   console.log(`a new user ${name} with ID ${id} is created`);
//})

//myEmitter.emit('User created',101,John);

module.exports= class extends events.EventEmitter{
    constructor(){
        super();
    }
}
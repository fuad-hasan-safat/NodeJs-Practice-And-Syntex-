const EventEmitter = require('events')

const customEmmiter = new EventEmitter()

customEmmiter.on('safat', (name, id)=>{
    console.log(`Data received user ${name} with id: ${id}`)
})
customEmmiter.on('safat', ()=>{
    console.log(`Some other logic`)
})

customEmmiter.emit('safat', 'Hasan', 55)
const server = require('./app')

const port = 3001

server.listen(port, ()=>{
    console.log(`server running on port: ${port}`)
})
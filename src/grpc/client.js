const grpc = require('@grpc/grpc-js')
const hello_proto = require('./proto')

function main() {
    var client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure())  
    client.sayHello({ message: 'Hello'}, (err, response) => {
        if (err) {
            console.error('Error: ', err)
        } else {
            console.log(response.message)
        }
    })
}

main()
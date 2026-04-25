// console.log('Hello World');

var fs = require('fs');
const os = require('os');
const http = require('http')
// const process = require('process');

// fs.writeFileSync('hello.txt', 'Hello from Node.js');

// // console.log(os.version());
// // console.log(os.cpus());
// console.log(process.cwd());

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello from Node.js');
        res.end();
    }
});
server.listen(3000);
const http = require('http')

const req = http.request('http://www.google.com',(res) => {
    res.on('data',(chunk) => {
        console.log(`Data is chunk : ${chunk}`);
    });
    res.on('end',() => {
        console.log('No more Data;');
    });
});

req.end();
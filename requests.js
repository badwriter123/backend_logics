const http = require('http')

const req = http.request('http://www.google.com',(res) => {  // replace The URL 'http://www.google.com' with your Desired URL.
    res.on('data',(chunk) => {
        console.log(`Data is chunk : ${chunk}`);
    });
    res.on('end',() => {
        console.log('No more Data;');
    });
});

req.end();

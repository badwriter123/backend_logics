const { get } = require('http')

get('http://www.google.com',(res) => {  // replace the URL 'http://www.google.com' with your desired URL.
    res.on('data',(chunk) => {
        console.log(`Data is chunk : ${chunk}`);
    });
    res.on('end',() => {
        console.log('No more Data;');
    });
});

req.end();

var fs = require('fs')

var rs = fs.createReadStream('d:/temp/1.txt',{
  flags: 'r',
  encoding: 'utf-8',
  fd: null,
  mode: 0o666,
  autoClose: true
});
var ws = fs.createWriteStream('d:/temp/2.txt',{
  flags: 'w',
  encoding: 'utf-8',
  fd: null,
  mode: 0o666,
  autoClose: true
});

rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {
        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

ws.on('drain', function () {
    rs.resume();
});

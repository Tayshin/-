var mycopy = require('./mycopy.js')
var bigcopy = require('./bigcopy.js')
//mycopy(process.argv.slice(2));
bigcopy(process.argv.slice(2));

//输入 node index.js package.json test.json
//输出新的test.json文件
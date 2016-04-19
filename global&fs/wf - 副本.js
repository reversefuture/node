var fs = require("fs");

console.log("准备append文件");
fs.appendFile('input.txt', '我是通过append的文件内容！',  function(err) { 
   if (err) {
       return console.error(err);
   }
   console.log("数据append成功！");
   console.log("--------我是分割线-------------")
   console.log("读取append的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});
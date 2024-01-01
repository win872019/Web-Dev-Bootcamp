const fs = require("fs");


/* fs.writeFile */
fs.writeFile("mes1.txt", "hi,node.js!", (e) => {
  if (e) {
    console.error("寫入文件時發生錯誤:", e);
  } else {
    console.log("文件寫入成功!");
  }
});


/* fs.appendFile */
fs.appendFile("mes2.txt", "hello,node.js!", (e) => {
    if (e) {
      console.error("寫入文件時發生錯誤:", e);
    } else {
      console.log("文件寫入成功!");
    }
  });



/* fs.readFile */
fs.readFile("./mes2.txt", "utf8", (e,data) => {
    if (e) throw e;
    console.log(data);
  });




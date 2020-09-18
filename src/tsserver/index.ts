// server.ts
/*
使用vscode 搭建 typescript 的nodejs 自动编译自动启动服务
https://blog.csdn.net/huangyong1991/article/details/78531998
npm install nodemon --save -dev
launch.json 如下：
tasks.json 如下：

VS Code 运行 TypeScript 操作指南
https://www.cnblogs.com/tinys-top/p/9090557.html

TypeScript（一） 安装与调试
https://zhuanlan.zhihu.com/p/43584032

*/

const express = require("express");
const app = express();
app.get('/', function (req: any, res: { send: (arg0: any) => void; }) {
    res.send('hello world!');
});

const server = app.listen(3001, function () {
    console.log('Listen on port 3001');
});
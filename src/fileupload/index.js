//https://zhuanlan.zhihu.com/p/248815229
//自己开发一个图床接口——基于 NodeJS.
//crul -H "Content-Type: application/json" -X POST -d '{"user_id": "123", "coin":100, "success":1, "msg":"OK!" }' http://localhost:3000
//crul -X POST http://localhost:3000
//curl -uri 'http://localhost:3000' -Method POST
//172.22.0.22 172.22.17.10 172.20.24.176
//curl --location --request POST 'http://localhost:4000/api/post' \
//--header 'Content-Type: multipart/form-data' \
//--form 'avatar=@/C:/Users/jxyanghuan/Desktop/favicon.ico'

const express = require('express');
const app = express();

//npm install lodash assert crypto path express-fileupload cors body-parser morgan
// 工具库 - lodash
const _ = require('lodash');
// assert - 测试是否为真值
const { ok } = require('assert');
// crypto - 用于获取文件名 MD5 值
const crypto = require('crypto');
// path - 用于获取文件拓展名
var path=require('path');

// 使用 express-fileupload 中间件
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    createParentPath: true
}));

// 处理跨域问题 - cors 模块
const cors = require('cors');
app.use(cors());

// 解析 POST 数据
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 使用 morgan 中间件 - 输出请求详细信息
const morgan = require('morgan');
app.use(morgan('dev'));

app.post('/api/post', async (req, res) => {
    try {
        // 如果没有文件被上传，则返回以下 JSON 数据
        if(!req.files) {
            res.send({
                status: "No file uploaded",
                link: "undefined"
            })
        }
        else{
            //let filesn = JSON.stringify(req.files);
            console.log(req.files);
            let avatar = req.files.avatar; // 声明字段名为 avatar 的图片数据为 avatar 变量
            console.log("avatar %s", avatar);
            let md5 = crypto.createHash('md5').update(avatar.name).digest('hex'); // 取 avatar 文件名的 MD5 值
            console.log("md5 %s", md5);
            avatar.mv('./uploads/' + md5 + path.extname(avatar.name)); // 存储(移动)图片到 uploads 文件夹，文件名为 avatar 文件名 MD5 + 文件拓展名
            // 发送以下 JSON 数据
            res.send({
                status: "ok",
                link: "https://example.com/uploads/" + md5 + path.extname(avatar.name)
            });
        }
    }
    // 如果上传出现错误，则返回 HTTP 500.
    catch (err) {
        res.status(500).send(err);
    }
})

var server = app.listen(4000, '127.0.0.1', function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server running at http://%s:%s", host, port);
  })
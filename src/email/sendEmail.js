/*  文件名： sendEmail.js    */

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secure: true,
    auth: {
        user: 'huan_yang2006@qq.com',
        pass: 'ynevmqjqqeugbgcb'
    }
});

module.exports = async function fn(email, code){
    let status = null
    await new Promise((resolve, reject) => {
        transporter.sendMail({
            from: 'huan_yang2006@qq.com',
            to: email,
            subject: '网站账户注册验证码',
            html: code
            // html: `<p>网站账户注册验证码：</p>
            //        <span style="font-size: 18px; color: red">` + code + `</span>`

        }, function (err, info) {
            if (err) {
                status = 0;
                reject();
            } else {
                status = 1;
                resolve();
            }
        });
    }).catch(error => console.log('promise rejection caught', error))

    return status
}
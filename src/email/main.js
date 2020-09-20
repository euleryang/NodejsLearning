/*  文件名  main.js  */

//导入我们sendEmail.js文件中导出的东西
const sendEmail = require('./sendEmail.js')

//此时sendEmail是一个函数，可传参数有 email, code , 执行完会返回一个status, 用于判断是否发送成功
const result = sendEmail('14162376@qq.com', 888888)
if(result === 0) {
	console.log('邮件发送失败')
}
else if(result === 1) {
	console.log('邮件发送成功')
}
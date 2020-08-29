const fs = require("fs-extra");
const os = require("os");
const readline = require("readline");

/**
 * 按行读写，中间无内容处理，类似文件复制功能
 * @param {string} readName
 * @param {string} writeName
 */
var readWriteFileByLine = function(readName, writeName) {
    var readStream = fs.createReadStream(readName);
    var writeStream = fs.createWriteStream(writeName);
    var rl = readline.createInterface({
        input: readStream,
        output: writeStream,
        terminal: true
    })
}


/**
 * 按行读写，中间对读取内容进行处理
 * @param {string} readName
 * @param {string} writeName
 * @param {Function} callback
 */
var readWriteFileByLineWithProcess = function(readName, writeName, callback) {
    var readStream = fs.createReadStream(readName);
    var writeStream = fs.createWriteStream(writeName);
    var rl = readline.createInterface({
        input: readStream
    })

    rl.on('line', line => {
        var rs = callback(line);
        writeStream.write(rs + os.EOL)
    })
}

exports.readWriteFileByLine = readWriteFileByLine;
exports.readWriteFileByLineWithProcess = readWriteFileByLineWithProcess;

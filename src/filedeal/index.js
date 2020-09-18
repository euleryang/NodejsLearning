var rwByLine = require('../lib/readWriteFileByLine.js');

//按行读写，对行做字符替换处理
var readName = './static/obj.txt';
var writeName = './static/rt.txt';

function lineDeal(line) {

    i++;
    var rs = line.toString().replace("\\",'\/');
    console.log(rs + "-" + i)

    return rs;
}

var i = 0;
rwByLine.readWriteFileByLineWithProcess(readName, writeName, lineDeal)

//按行读写，无处理
readName = './static/obj.txt';
writeName = './static/rt1.txt';
rwByLine.readWriteFileByLine(readName, writeName);
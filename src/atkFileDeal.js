var rwByLine = require('./lib/readWriteFileByLine.js');

//按行读写，对行做字符替换处理
var readName = './obj.txt';
var writeName = './rt.txt';
var readAtkName = 'D:\\Download\\ATK018200827\\ATK018200827MIN.TXT';
var writAtkeName = 'D:\\Download\\ATK018200827\\ATK018200827MINNEW.TXT';

var FC_Line = ' CNY0.00';
var priceLineReg = /CNY\s+\d{1,5}.00\s+CN/;
var priceReg = /\d{1,5}.00/;
var ticketReg = /018\d{10}\s/;
var nullReg = /\sNULL\s/;
var fcLineReg = /\sCNY0.00/;

var marchBegin = false;
var ticketNo = '';
var priceLine = '';
var price = '';

function atkLineDeal(line) {
    var rs = line.toString();

    if(nullReg.test(line)){
        i++;
        marchBegin = true;

        ticketNo = line.match(ticketReg)
        priceLine = line.match(priceLineReg)
        price = line.match(priceReg)
        console.log(ticketNo + "-" + i  + "-" + price)
        
        //rs = line.toString().replace("\\",'\/');
    }

    //false && 
    if(marchBegin){
        var ticketLineReg = new RegExp(ticketNo);
        if(ticketLineReg.test(line)){
            if(fcLineReg.test(line)){
                rs = line.toString().replace(FC_Line, price + "CNY" + price);
            }
        
        } else {
            marchBegin= false;
        }
    }
    
    return rs;
}

var i = 0;
rwByLine.readWriteFileByLineWithProcess(readAtkName, writAtkeName, atkLineDeal)

//按行读写，无处理
readName = './obj.txt';
writeName = './rt1.txt';
rwByLine.readWriteFileByLine(readName,writeName);
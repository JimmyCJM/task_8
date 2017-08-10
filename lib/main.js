
function postNet(input){
    var output = judge(input);
    return output;
}

function judge (input){
    let result = 0;
    try {
        if (typeof input === "string"){
            if (input[0] !== '|' || input[input.length-1] !== '|'){
                if (input.length === 10){
                    return encode(input);       //number_10 输入情况
                }
                else return `err input!please check your input`;
            }
            else if (parseInt(input.split(" ").join("").length/5-1) !== 5 && parseInt(input.split(" ").join("").length/5-1) !== 9){
                return `err input!please check your input`;
            }
            else result = decode(input);        //string 输入情况
        }
        else if(typeof input === "number"){         //number_5_9 输入情况
            input = input.toString();
            var num = parseInt(input.replace(/[^0-9]/ig,""));
            if (num.toString().length !== 5 && num.toString().length !==9)
                return `err input!please check your input`;
            result = encode(num.toString());
        }
    }
    catch (err){
        return`err input!please check your input`;
    }
    return result;
}

function encode(num){
    num = num.toString();
    num = num.replace("-","");
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum += parseInt(num[i]);
    }
    let allNum = (parseInt(num)*10 + 10 - sum % 10).toString();
    let result = `|`;
    for(let i=0;i<allNum.length;i++) {
        switch (allNum[i]) {
            case '0':result += ` ||:::`;break;
            case '1':result += ` :::||`;break;
            case '2':result += ` ::|:|`;break;
            case '3':result += ` ::||:`;break;
            case '4':result += ` :|::|`;break;
            case '5':result += ` :|:|:`;break;
            case '6':result += ` :||::`;break;
            case '7':result += ` |:::|`;break;
            case '8':result += ` |::|:`;break;
            case '9':result += ` |:|::`;break;
        }
    }
    result += ` |`;
    return  result;
}

function decode(str){
    if (parseInt(str.split(" ").join("").length/5-1) > 5){
        return decode_9(str);
    }
    else return decode_5(str);
}

function decode_5(str){
    let len = parseInt(str.split(" ").join("").length/5-1);
    let result = [];
    for(let i =0;i<len;i++){
        switch (str.split(" ")[i+1]){
            case '||:::':result.push(0);break;
            case ':::||':result.push(1);break;
            case '::|:|':result.push(2);break;
            case '::||:':result.push(3);break;
            case ':|::|':result.push(4);break;
            case ':|:|:':result.push(5);break;
            case ':||::':result.push(6);break;
            case '|:::|':result.push(7);break;
            case '|::|:':result.push(8);break;
            case '|:|::':result.push(9);break;
        }
    }
    return result.toString().replace(/,/ig,"");
}

function decode_9(str){
    let result = decode_5(str);
    return `${result[0]}${result[1]}${result[2]}${result[3]}${result[4]}-${result[5]}${result[6]}${result[7]}${result[8]}`;
}



module.exports = postNet;

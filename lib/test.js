/*
0   ||:::
1   :::||
2   ::|:|
3   ::||:
4   :|::|
5   :|:|:
6   :||::
7   |:::|
8   |::|:
9   |:|::
 */

/*
var a =234762387-3576;
a = a.toString();
var b = a.replace(/[^0-9]/ig,"");
*/
/*
let str = `| ::||: :|::| |::|: |:|:: :||:: :::|| :::|| :|:|: |:|:: :|::| |`;
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
*/


let num = 957132046

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

console.log(num);
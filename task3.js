
const str = "Hey all! Check [my new site](http://mysite.com)! [not a link](javascript:console.log('hello'))";

console.group();
console.log(str);
console.log("--------");
console.log(converter(str));
console.groupEnd();


function converter(str){
    const bracketsArr = str.match(/\[[^\]]*]/g);
    const roundedArr = str.match(/\(([^)]+)\)/g);
    
    for(let i = 0; i < bracketsArr.length; i++){
        const textInBrackets = bracketsArr[i].replace(/[\[\]']+/g,'');
        const textInRoundedBrackets = roundedArr[i].replace(/[{()}]/g, '');
        if(textInBrackets !== "not a link"){
            str = str.replace(bracketsArr[i] + roundedArr[i],  
            `<a href='${textInRoundedBrackets}'>${textInBrackets} </a>`);
        }
    }
    
    return str;
}
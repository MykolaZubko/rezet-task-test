const str = 'Hello world!';

function shuffle(str){
    const length = str.length / 2;
    let result = "";

    const first = str.slice(0, length);
    const second = str.slice(length, length * 2);
    
    for(let i = 0; i < length; i++){
        result += first.charAt(i) + second.charAt(i)
    }
    
    return result;
}

const test = shuffle(str);

console.log('shuffled: ' + test);


function unShuffle(str){
    
    const length = str.length;

    let first = "";
    let second = "";
    
    for(let i = 0, j = 1; i < length, j < length; i += 2, j += 2){
        first += str.charAt(i);
        second += str.charAt(j);
    }
    
    
    return first + second;
}

console.log("unshuffled: " + unShuffle(test));
let arr = [[1, 2], 3, [4, [5, [6],['foo', 'bar']]]]

function walkLeaves(arr, fn)
{
    for (let i = 0; i < arr.length; ++i) {
        if (typeof arr[i] === 'object' && arr[i].length) { 
            walkLeaves(arr[i], fn);
        } else {
            fn(arr[i], i); 
        }
    }
    }

let final = [];
walkLeaves(arr, function(item, index) {
    final.push(item);
});




console.log(final.filter(Number))
function hello(a){
    let sum = 10;
    let result = sum + a;
    var child = function(params){
        return params
    }
    return function finzlized(input){
        return result + input;
    }
}

console.log(hello(1)(3));
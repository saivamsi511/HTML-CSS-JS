const fetchstudents = (callback) =>{
    let students =[
        {name:"sai" ,id:501},
        {name:"vamsi",id:310},
        {name:"king",id:384}
    ];
    return callback(students);
};
fetchstudents((x)=>{
    console.log(x);
});

(function add(a,b){
    console.log(a+b)
})(1,300)


const high =(fun) =>{
    return fun(1,2)
}
console.log(high(add))



var a = 5;
var b = 1;

function abcd(x,y){
    var a = 6;
    var result = x+ y
    console.log(a)
    console.log(b);
    console.log("x+y:",+result);
}

abcd(1,2)

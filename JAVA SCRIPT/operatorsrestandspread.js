function add(...args){
    // let arrvar = args
    console.log(args);
    return args.reduce((a,b)=>a+b);
}


console.log(add(1,2))
console.log(add(1,2,3))
console.log(add(1,2,3,4));


function add(a,b=10){
    return a+b;
}
console.log(add(4,20))

let props = {
    isLMSdone : true,
    isIDgenerated:true,
    rollnoallocated:true
}


let marks =[12,3,4,24,2,42,53]
let students = [
    {name:"saivamsi",...props,marks:[...marks]},
    {name:"king",...props,marks:[...marks]},
    {name:"sai",...props,marks:[...marks]},
];


students[0].isLMSdone=false;
console.log(students)


// shallow deepy copy

let students = {
    name:'sai',
    id:201
}

let students2 = students;
students2.name = "vamsi";
console.log(students2)
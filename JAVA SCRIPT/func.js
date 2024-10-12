function add(a,b){
    let result=a+b;
    return result;
}


var add1 = (a,b) =>{
    let result = a+b;
    return result;
}
let r = add(100,2)
console.log(r)


let students = [12,3,1,13,413,13]
students.sort(
     (a,b) =>{return  a-b } 
);
students.forEach((x,i)=>{
    console.log(i)
    console.log(x)
})
student = students.map(x=>x+10)
console.log(student)
let res = students.filter((x) => x%2==0);
console.log(res)
console.log(students)
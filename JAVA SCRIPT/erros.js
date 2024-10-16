const fetchData = (Callback)=>{
    let students = ["sai","vamsi","king"]
    return Callback(students)
};

fetchData((data) =>{
    console.log(data)
})


function add(a,b){
    return a + b;
}

let result = add(1,2)
console.log(result)

const div = (x,y) =>{
    return x/y;
}
console.log(div(7,3))



let s1={
    name:"jaya"
}
try{
console.log(s);
}catch(error){
    console.log(error)
}


class customExp extends Error{
    constructor(msg){
        super(msg);
        this.name="customExp"
    }
}

const student ={
    name:"sai",
    id:511
}

const payment ={
    isDone:true
};

let minute = 0
let setIntrl = setInterval(function(){
    minute +=2
    if(minute>=10){
        console.log("payment success")
        clearInterval(setIntrl);
    }else{
        console.log("After 2 seconds"+JSON.stringify(student))
    }
},2000)


console.log(student);

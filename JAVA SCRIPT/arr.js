let student = ["sai","vamsi","king","sasi","balu","deeru","srenevasu","saivamsi"]


student.push("mithun");
student.unshift("nikitha");
// student.splice(1,2)
console.log(student.slice(1,4))
for(let i =0 ;i<student.length;i++){
    console.log(student[i])
};

const getData = (callback)=>{
    return callback({"name":"srinadh",id:501})
}

getData((x)=>{
    console.log(x)
})
student.forEach((x,i) => {
    console.log(`${x} and index is ${i}`)
});



const student2 = {
    values:["venu","samrat","samudra prasad"],
    forEach:function(callback){
        return callback(this.values)
    }
}

student2.forEach(x =>{
    console.log(x);
})


const set = new set();
set.add("susma");
set.add("suri");
set.add("suri")
set.add("vamsi")


let str = "this is good day it is always happy for me"
const freqmap = new Map();
for(let i=0;i<str.length;i++){
    let char = str.charAt(i);
    if(char !== ' '){
    if (freqmap.has(char)){
        let value = freqmap.get(char);
        freqmap.set(char,value+1);
    }else{
        freqmap.set(char,1);
    }
}
}
console.log(freqmap)
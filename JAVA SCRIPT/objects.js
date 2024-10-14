const stu = {
    name:"sai",
    id:511,
    age:22,
    greet : function(){
        console.log(`my name is ${this.name} and age is ${this.age} and roll no ${this.id}`)
    }
};

stu.greet();


const sub = {
    name:"HTMl",
    id:1,
    teach:function(){
        console.log(`I will teach ${this.name}`)
    }
}


// const obj1 = Object.assign({},sub)
const obj1 = Object.create(sub);
const obj2 = JSON.parse(JSON.stringify(sub));
obj2.name = "JS"
console.log(obj2)
obj1.teach();

//consrtuctor function
function person(name,id,rollno){
    this.name=name,
    this.id = id,
    this.rollno = rollno,
    greet = function(){
        console.log(`my name is ${thiss.name} and id is ${this.id} and roll no is ${this.rollno}`)
    }
}
const o = person("suraj",1,22)
console.log(o)


const student = {
    name :"sudha",
    email:"21kb",
    rollno:311,
    isjoined:true,
    salary:3003
}


for (let ele in student){
    console.log(`${ele}:${student[ele]}`)
}

for (let e in student){
    console.log(e)
}


const keys = Object.keys(student)
const values = Object.values(student)
const entries = Object.entries(student)
console.log(keys)
console.log(values)
console.log(entries)


const student1 = {
    "name" :"sudha",
    "email":"21kb",
    "rollno":311,
    "salary":2000,
    "isjoined":true
}

console.log(JSON.parse(JSON.stringify(student1)));
console.log(JSON.parse(`{"name":"vamsi"}`));
console.log(student)
console.log(student1)
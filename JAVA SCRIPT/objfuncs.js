var a = "sai"

const students = {
    name:"sai" ,
    id:"511",
    print:function(){
        console.log("my name is "+this.name+" my id is "+this.id);
    }
};

var p  = students.print.bind(this);
console.log(p)
students.print();

let obj = {
    name:"vamsi",
    id:"532",
}
students.print.apply(obj);
console.log(students)
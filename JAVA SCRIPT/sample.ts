class student1 {
    name:string;
    email:string;
    constructor(name,email){
        this.email = email;
        this.name = name;
    }
}

const obj = new student1("sai","sai@gmail.com")
console.log(obj);
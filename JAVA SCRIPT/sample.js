let age = 36;
if (age>19)
    console.log("eligible")
else 
    console.log("not eligible")
if (age<=10){
    console.log("child")
}else if (age>=11 && age<20){
    console.log("Tennage")
}else if (age>=20 && age<35){
    console.log("adult hood")
}else if (age>=35 && age<60){
    console.log("old age")
}else{
    console.log("died")
}

var option="BAL";
switch(option){
    case "WITHDRAW":console.log("It is withdraw operation")
    break;
    case "DEPOSIT" : console.log("deposit")
    break;
    case "BAL":console.log("BAL")
    break;
    default : console.log("Invalid please enter the correct option")
}

let students=["sai","vamsi","sukumar","skindar","seenu","loki","bd","banti","chanti"]
for(let x=0;x<students.length;x++){
    console.log("seen ......")
}


let i = 100;
while (i>0){
    console.log("Battery is decresing" +": " +i--);
}

i = 100;
do{
    console.log("Battery is decresing" +": " +i--);
}while(i>0);

let elementtofind = 5
for(let i =1;i<=100;i++){
    console.log("I am looping " +i)
    if (i==5){
        console.log("I found 5")
        break
    }
    else continue;
    console.log(i)
}
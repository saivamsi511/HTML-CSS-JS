const fetchData =()=>{
    return new Promise((reslove,reject)=>{
    let age = 16;
    let obj ={
        message:"your are eligliable"
    }
    if (age>=18){
        setTimeout(()=>{
            reslove(obj)
        },1000)
    }else{
        obj.message = "your are not eligible"
        setTimeout(()=>{
            reject(obj)
        },1000)
    }
})
}


fetchData()
.then((result)=>{
    console.log(result)
    return fetchData();
})
.catch((err)=>{
    console.error(err)
});

const fetchDatasync = async () =>{
    const data = await fetchData();
    console.log("it is after promises and it is 1")
    console.log("if is after promise and it is 2")
    console.log(data);
}

fetchDatasync()

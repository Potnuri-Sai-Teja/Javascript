
const data = [
    {
        name: "Butters",
        age: 3,
        type: "dog"
    },
    {
        name: "Lizzy",
        age: 6,
        type: "dog"
    },
    {
        name: "Red",
        age: 1,
        type: "cat"
    }, {
        name: "Joey",
        age: 3,
        type: "dog"
    }
];


function findAllDogs(data){
    const callback= (resolve,reject)=> {
    
        let dogs=data.filter(animal => animal.type === "some")
        if(dogs.length > 0){ return resolve(dogs);}
        else {return reject("NO RECORDS FOUND") }
        
     
    }
    
    return new Promise(callback)
    
}


findAllDogs(data).then((response)=>{
    console.log("DATA FOUND")
}).catch((message)=>{
    console.log(message)
})



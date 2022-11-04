/* follow the format of 1st 3 code */ 

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
// Q1.Write a promise
// function which will display all records with type === 'dog'


function getDogs(data){
    const callback = (resolve,reject)=> {
        let dogs=data.filter(animal => animal.type === "dog");
        resolve(dogs);
    };
    return new Promise(callback);    
}

// getDogs(data).then


// function Name-- - > findAllDogs(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT: Use filter.


function findAllDogs(data){
    const callback= (resolve,reject)=> {
    
        let dogs=data.filter(animal => animal.type === "dog")
        if(dogs.length > 0) return resolve(dogs);
        return reject("NO RECORDS FOUND")
    }
    
    return new Promise(callback)
    
}








// Q2.Write a promise
// function which will display all the records starting with name 'B'
// or any character passed as parameter.
// function Name-- - > findSpecificStartChar(data, 'B')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT: Use filter and string functions.

function findSpecificStartChar(data,mychar){
   
    const callback= (resolve,reject)=> {
    
        let result1=data.filter(content => content.name.charAt(0) == mychar)
        if(result1.length > 0) return resolve(result1);
        return reject("NO RECORDS FOUND")
    }
    
    return new Promise(callback)
     
    
    }
    findAllDogs(data,"J").then((response)=>{
    
        let result=[];
 //       result={...response};
        result[0] =response.map(content => `${content.name}`)
        result[1]=response.map(content => `${content.age}`)
        result[2]=response.map(content => `${content.type}`)

         console.log(result)

        }).catch((response)=>{

         console.log(response)           
        })




// Q3.Write a promise
// function which will display sum of all ages.
// function Name-- - > findSumAges(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// HINT: Use reduce functions.


function findSumAges(data){
    let p= new Promise((resolve,reject)=> {
    
        let result1=data.reduce((total,content) => total + parseInt(content.age),0)
        
        if(result1 != 0 )
        {
            resolve(result1)
        }
        else{
            reject("NO RECORDS FOUND")
        }
    
    })
    
    
    p.then((response)=>{
    
            let result=[];
            let my_content=response.my_data;
    
        console.log(response.sumofages);
        
        result[0] =my_content.map(content => `${content.name}`)
        result[1]=my_content.map(content => `${content.age}`)
        result[2]=my_content.map(content => `${content.type}`)
    
        console.log(result);
    }).catch((response)=>{
    
        console.log(response)
    })
    
    }
    findSumAges(data);



// Q4.Write a promise
// function which will display all the records with only name & ages.
// function Name-- - > findAll(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT: Use map.



function findAll(data){
    let p= new Promise((resolve,reject)=> {
    
        let result1=data.map(content =>{
            return {name:content.name,age:content.age}
        })
        
        if(result1.length != 0)
        {
            resolve(result1);
        }
        else{
            reject("NO RECORDS FOUND")
        }
    
    })
    
    
    p.then((response)=>{
    
            let result=[];
           
    
        result[0] =response.map(content => `${content.name}`)
        result[1]=response.map(content => `${content.age}`)
       
        console.log(result);
    }).catch((response)=>{
    
        console.log(response)
    })
    
    }
    findAll(data);







// Q5.Write a
// function to display sum of all ages of records having type as dog.
// Use nesting promises
// function which first call Q1
// function its output will be given to Q3 and display total.
// HINT: nesting of promises.


/* Q1  findAlldogs one promise and findDogages is another promise
  here we given dogages input from findalldogs from the response of findDogages we got a result  */


function findAlldogs(data){
    const my_dogs = (resolve,reject)=> {
        let dogs=data.filter(animal => animal.type === "dog");
        resolve(dogs);
    };
    return new Promise(my_dogs);    
}


function findDogages(data){
    const ages = (resolve,reject)=> {
        let sumofages=data.reduce((total,dogs)=>(total+dogs.age),0);
        if(sumofages > 0) resolve(sumofages)
        else reject("No Records found");
    };
    return new Promise(ages);    
}


findAlldogs(data).then(findDogages).then((response) => {
    console.log(response)
})







// Q6.Write a promise
// function which will display all the records in sorting according to names.
// function Name-- - > Sorting(data, 'ASC')
// ASC - > ASCENDING / DESC - > DESCENDING
// If there are no records in array reject with message "NO RECORDS"
// If there are records in Array then according to sorting order display result and
// return inresolve of promises.
// HINT: sort on objects.



function Sorting(data,order){

    let p = new Promise((resolve,reject)=>{

            let result=data.sort((a,b)=>{

                if(order=="ASC"){
                    let status;
                    status=a.name.localeCompare(b.name)
                    return status;
                }
                if(order=="DESC"){
                    let status;
                    status=b.name.localeCompare(a.name)
                    return status;

                }

            });

            if(result.length !=0){

                    resolve({
                        mydata : result
                    })

            }
            else{

                reject("NO RECORDS");
            }

    })

    p.then((response) =>{

            let result=[];
            result ={...response.mydata};
            console.log(result);
          

    })



}

Sorting(data,"ASC")






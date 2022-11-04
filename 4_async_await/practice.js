// Q.Write a program to perform async and await on following data

const animals = [{
    name: 'Butters',
    age: 3,
    type: 'dog'
},
{
    name: 'Lizzy',
    age: 6,
    type: 'dog'
},
{
    name: 'Red',
    age: 1,
    type: 'cat'
},
{
    name: 'Boey',
    age: 4,
    type: 'dog'
},
];

// Q1.Write a promise function to display all types having dog.
// funtion: findDogs(data)
// Hint: Filter


        async function findAnimal(animals,typeOfAnimal){

            return p = new Promise((resolve,reject)=>{
               let animalList =animals.filter(animal => animal.type === typeOfAnimal)
               if(animalList.length > 0) return resolve(animalList);
               return reject("NO Records Found")


            
            })
        }
      //  findDogs(animals,"dog").then((response)=>console.log(response)).catch((response)=>console.log(response))






// Q2 Write a promise function to display all names starting with "B".
// function: findSpecific(data, 'b');
// Hint: filter

        async function findSpecific(animals,nameStarsWith){
            return p = new Promise((resolve,reject) => {
                let getListNameStartsWithCharacter = animals.filter(animal => animal.name.startsWith(nameStarsWith))
                if(getListNameStartsWithCharacter.length > 0) return resolve(getListNameStartsWithCharacter);
                return reject("No Records Found")
            })
        }

      //findSpecific(animals,"B").then(response => console.log(response)).catch(response => console.log(response))




// Q3.Write a promise function to display sum of all ages.
// function: findAges(data)
// Hint: reduce

        async function findAges(animals){
            return p = new Promise((resolve,reject)=>{
                let sumOfAges = animals.reduce((prev,animal) => (prev + animal.age),0)
                if(sumOfAges > 0) return resolve(sumOfAges)
                return reject("No Records Found")
            })
        }
   // findAges(animals).then(response => console.log(response)).catch(response => console.log(response))        




// Q4.Write a promise function total of ages of records whose type === 'dog'
// and age > 3.
// function: findTotal(data)

        async function findTotal(animals,animalType,Age){

            let particularAnimalList = await findAnimal(animals,animalType);
            let getAnimalAgeGreaterThangivenAge =  particularAnimalList.filter(animal => animal.age > Age)
            let sumOfAgesOfParticularAnimal = await findAges(getAnimalAgeGreaterThangivenAge);
            return p = new Promise((resolve,reject) => {
                if(sumOfAgesOfParticularAnimal > 0) return resolve(sumOfAgesOfParticularAnimal)
                return reject("NO RecordsFound")
            })    
        }

    //    findTotal(animals,"dog",3).then(response => console.log(response)).catch(response => console.log())






// Q5.Write async function to call all above function Q1 Q2 Q3 Q4.
// function: async function findAll() {}

        async function findAll(animals,animalType,animalStartsWith,Age){

            let particularAnimalList = await findAnimal(animals,animalType);
            let getAnimalAgeGreaterThangivenAge = await particularAnimalList.filter(animal => animal.age > Age)
            let getAnimalsNameStratsWithGivenCharacter = await findSpecific(getAnimalAgeGreaterThangivenAge,animalStartsWith)
            let sumOfAgesOfParticularAnimal = await findAges(getAnimalsNameStratsWithGivenCharacter);
            return p = new Promise((resolve,reject) => {
                if(sumOfAgesOfParticularAnimal > 0) return resolve(sumOfAgesOfParticularAnimal)
                return reject("NO RecordsFound")
            })  
        }


      //  findAll(animals,"dog","B",3).then(response => console.log(response)).catch(response => console.log(response))

// Q6.Write async function in which Q1 output will act as input Q3.
// function: async function

        async function sumOfagesTakingInputFromQ1Function(animals,typeOfAnimal){
            let Q1Result = await findAnimal(animals,typeOfAnimal);
            let Q3SumOfAges = await findAges(Q1Result);
            return p = new Promise((resolve,reject) => {
                if(Q3SumOfAges > 0) return resolve(Q3SumOfAges)
                return reject("No Records Found")
            })
        }

     //   sumOfagesTakingInputFromQ1Function(animals,"dog").then(response => console.log(response)).catch(response => console.log(response))




// Q7.Using nesting of promises peform Q1 output will act as input Q3
// function.
        async function Q1findAnimal(animals,typeOfAnimal){

            return p = new Promise((resolve,reject)=>{
            let animalList =animals.filter(animal => animal.type === typeOfAnimal)
            if(animalList.length > 0) return resolve(animalList);
            return reject("NO Records Found")


            
            })
        }

 /*       Q1findAnimal(animals,"dog").then(response => { 
            findAges(response).then(response1 => console.log(response1))
        })
*/




// Q8.Using Promise.all give a call to Q1 Q2 Q3 functions.

      //  Promise.all([findAnimal(animals,"dog"),findSpecific(animals,"B"),findAges(animals)]).then(values => console.log(values))



// Q9.Using Promise.race give a call to Q1 Q2.functions.    

        Promise.race([findAnimal(animals,"dog"),findSpecific(animals,"B")]).then(value =>console.log(value));





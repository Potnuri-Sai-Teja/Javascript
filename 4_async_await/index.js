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
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];


// Q1.Write a promise function to display all types having dog.
// funtion: findDogs(data)
// Hint: Filter

async function findDogs(animals) {
    const dogs=animals.filter(animal=>animal.type==='dog');
    Promise.resolve(dogs);
}

// Q2 Write a promise function to display all names starting with "B".
// function: findSpecific(data, 'b');
// Hint: filter
async function findSpecific(animals,char){
    const names_starts_with_char =animals.filter(animal=>animal.name.startsWith(char));
    return Promise.resolve(names_starts_with_char);
}

// Q3.Write a promise function to display sum of all ages.
// function: findAges(data)
// Hint: reduce

async function findAges(animals){
    const sumofAges=animals.reduce((ac,animal)=>ac+animal.age,0);
    return Promise.resolve(sumofAges);
}


// Q4.Write a promise function total of ages of records whose type === 'dog'
// and age > 3.
// function: findTotal(data)

async function findTotal(animals){
    const dogs=await findDogs(animals);
    const sumOfDogAges=await findAges(dogs);
    return Promise.resolve(sumOfDogAges);
}


// Q5.Write async function to call all above function Q1 Q2 Q3 Q4.
// function: async function findAll() {}

async function findAll(){
    const dogs=await findDogs(animals);
    const name_starts_with_B=await findSpecific(animals,'B');
    const sumofages=await findAges(animals);
    const sumOfDogAges=await findTotal(animals);
}


// Q6.Write async function in which Q1 output will act as input Q3.
// function: async function

async function io(){
    const dogs= await findDogs(animals)
    const sumofDogAgess= await findAges(dogs);
    return Promise.resolve(sumofDogAgess);
}



// Q7.Using nesting of promises peform Q1 output will act as input Q3
// function.
async function nesting(){
    const sumofDogAgess = await findDogs(animals).then(dogs => findAges(dogs));
    return Promise.resolve(sumofDogAgess);
}


// Q8.Using Promise.all give a call to Q1 Q2 Q3 functions.

async function promiseAll(){
    const all= await Promise.all([findAges(animals),findDogs(animals),findSpecific(animals,'B'),findTotal(animals)]);
    return Promise.resolve(all);
}


// Q9.Using Promise.race give a call to Q1 Q2.functions.
async function promiseRace(){
    const result=await Promise.race([findDogs(animals),findSpecific(animals,'B')]);
    return Promise.resolve(result);
}



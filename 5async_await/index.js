var data = [{
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];


// Q1.Write a promise function to display all name starting with 'E'.
// funtion: findStartNames(data)
// Hint: Filter

function findStartNames(data) {
    return new Promise((resolve, reject) => {
        const records = data.filter(item => item.name.startsWith('E'));
        resolve(records);
    })
}


// Q2.Write a promise function to display all name ending with 'E'.
// funtion: findEndNames(data)
// Hint: Filter
function findEndNames(data) {
   return new Promise((resolve,reject)=>{
       const records = data.filter(item => item.name.endsWith('E'));
       resolve(records);
   })    
}



// Q3.Write a promise function to display total sum of all records pilotingScore + shootingScore.
// function: find(data)
// Hint: reduce.
function find(data){
    return new Promise((resolve,reject)=>{
        const result=data.reduce((ac,item)=>ac+item.pilotingScore+item.shootingScore,0);
        resolve(result);
    })
}



// Q4.Write a promise function to display total sum of all records pilotingScore + shootingScore whose isForceUser === true

// function: findForce(data)
// Hint: filter, reduce.

function findForce(data){
    return new Promise((resolve,reject)=>{
        const forceUsers=data.filter(item=>item.isForceUser);
        const result = forceUsers.reduce((ac, item) => ac + item.pilotingScore + item.shootingScore, 0);
        resolve(result);
    })
}



// Q5.Write a promise function to find all records whose isForceUser === true then multiply 6 to each pilotingScore and
// finally find sum of all all records pilotingScore + shootingScore
// function: findForceTotal(data)
// Hint: filter, map, reduce.
function findForceTotal(data){
    return new Promise((resolve,reject)=>{
      const result = data.filter(item => item.isForceUser)
                        .map(item=>{
                            item.pilotingScore=item.pilotingScore*6;
                            return item;
                        })
                        .reduce((ac,item)=>ac+item.pilotingScore+item.shootingScore,0);
      resolve(result);
    })
}


// Q6.Write async function to call all above function Q1 Q2 Q3 Q4.
// function: async function findAll() {}

async function findAll(){
    await findStartNames(data);
    await findEndNames(data);
    await find(data);
}


// Q7.Write async function in which Q1 output will act as input Q3.
// function: async function findAllTotal() {}
async function findAllTotal(){
    const outputQ1=await findStartNames(data);
    const outputq2=await find(outputQ1);
    return Promise.resolve(outputq2);
}

// Q8.Using nesting of promises peform Q1 output will act as input Q3
// function.

function nesting(data){
    return findStartNames(data).then(recors=>{
        return find(recors);
    })
}


// Q9.Display only name of person having isForce === true and shooting > 10
// Hint: filter and map.

function findForceWithShooting(data){
   const records=data.filter(item=>item.isForceUser==true && item.shootingScore>10).map(({name})=>name);
}


// Q10.Using Promise.all give a call to Q1 Q2 Q3 functions.

async function promiseAll(data){
    const results=await Promise.all([findStartNames(data),findEndNames(data),find(data)]);
    return Promise.resolve(results);
}


// Q11.Using Promise.race give a call to Q1 Q2.functions.

async function promiseRace(data){
    const result=await Promise.race([findStartNames(data),findEndNames(data)]);
    return Promise.resolve(result); 
}


// Q12.Write a promise
// function to perform sorting on shooting in ascending order.
function sorting(data){
    const records=data.sort((a,b)=>a.shootingScore-b.shootingScore);
    return records;
}


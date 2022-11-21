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
    name: "Caleb DumE",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
},
];
// Q1.Write a promise function to display all name starting with 'E'.
// funtion: findStartNames(data)
// Hint: Filter

        async function findStartNames(data,charStartsWithName){

            return p = new Promise((resolve,reject)=>{
                let getNamesStartsWithGivenCharacter = data.filter(data => data.name.startsWith(charStartsWithName));  
                if(getNamesStartsWithGivenCharacter.length > 0) return resolve(getNamesStartsWithGivenCharacter);
                return reject("No Records Found")
            })
        }

      //  findStartNames(data,"C").then(response => console.log(response)).catch(response => console.log(response))



// Q2.Write a promise function to display all name ending with 'E'.
// funtion: findEndNames(data)
// Hint: Filter

    async function findEndNames(data,charStartsWithName){

        return p = new Promise((resolve,reject)=>{
            let getNamesStartsWithGivenCharacter = data.filter(data => data.name.endsWith(charStartsWithName));  
            if(getNamesStartsWithGivenCharacter.length > 0) return resolve(getNamesStartsWithGivenCharacter);
            return reject("No Records Found")
        })
    }

  //findEndNames(data,"E").then(response => console.log(response)).catch(response => console.log(response))



// Q3.Write a promise function to display total sum of all records pilotingScore + shootingScore.
// function: find(data)
// Hint: reduce.

    async function findSumOfPilotingScoreAndshootingScore(data){
        return p = new Promise((resolve,reject)=>{
            let sumofPilotingScoreAndShootingScore = data.reduce((prev,content)=> (prev + content.pilotingScore + content.shootingScore),0)
            if(sumofPilotingScoreAndShootingScore > 0) return resolve(sumofPilotingScoreAndShootingScore);
            return reject("No Records Found");
        })
    }
 //   findSumOfPilotingScoreAndshootingScore(data).then(response => console.log(response)).catch(response => console.log(response))


 
// Q4.Write a promise function to display total sum of all records pilotingScore + shootingScore whose isForceUser === true

// function: findForce(data)
// Hint: filter, reduce.


    async function findForce(data){
            let getForceUserTrueData = data.filter(content => content.isForceUser === true)
            let sumofPilotingScoreAndShootingScoreBasedOnForce = await findSumOfPilotingScoreAndshootingScore(getForceUserTrueData);
            return p = new Promise((resolve,reject)=>{
                if(sumofPilotingScoreAndShootingScoreBasedOnForce > 0) return resolve(sumofPilotingScoreAndShootingScoreBasedOnForce);
                return reject(sumofPilotingScoreAndShootingScoreBasedOnForce);
            })       
    }
   // findForce(data).then(response => console.log(response)).catch(response => console.log(response))

    
// Q5.Write a promise function to find all records whose isForceUser === true then multiply 6 to each pilotingScore and
// finally find sum of all all records pilotingScore + shootingScore
// function: findForceTotal(data)
// Hint: filter, map, reduce.

    async function findForceTotal(data){
            return p = new Promise((resolve,reject)=>{
                let getForceUserTrueData =data.filter(content => content.isForceUser === true)
                                              .map(element => element.pilotingScore = element.pilotingScore * 6)
                                              .reduce((prev,mydata)=> (prev + mydata),0);

                    if(getForceUserTrueData > 0) return resolve(getForceUserTrueData);
                    return reject("No Records Found")

            })
    }

   // findForceTotal(data).then(response => console.log(response)).catch(response => console.log(response))

// Q6.Write async function to call all above function Q1 Q2 Q3 Q4.
// function: async function findAll() {}

    async function findAll(data,charStartsWithName){
      return  Promise.all([findStartNames(data,charStartsWithName),findEndNames(data,charStartsWithName),findSumOfPilotingScoreAndshootingScore(data),findForce(data)])
    }

   // findAll(data,"E").then(values => console.log(values))

    
// Q7.Write async function in which Q1 output will act as input Q3.
// function: async function findAllTotal() {}

    async function findAllTotal(data,charStartsWithName){

        let Q1data =await findStartNames(data,charStartsWithName);
        let Q3Result = await findSumOfPilotingScoreAndshootingScore(Q1data);
        return p = new Promise((resolve,reject) => {

            if(Q3Result > 0) return resolve(Q3Result);
            return reject("No Records Found");

        })

    }

  //  findAllTotal(data,"E").then(values => console.log(values))


// Q12.Write a promise
// function to perform sorting on shooting in ascending order.

    function sortingOfDataUsingShootingData(data,typeOfSort){
        return data.sort((a,b)=> {
             return AfterSortingData = typeOfSort === "ASC" ? a.shootingScore - b.shootingScore : b.shootingScore -a.shootingScore;
        })
    }
  //  console.log(sortingOfDataUsingShootingData(data,"DESC"))

  
// Q8.Using nesting of promises peform Q1 output will act as input Q3
// function.

    async function Q1(data,charStartsWithName){
        let myData =await findStartNames(data,charStartsWithName)
            return p = new Promise((resolve,reject)=>{
                if(myData.length > 0) return resolve(myData);
                return reject("No Records found")  
            })
    }
    Q1(data,"E").then(response => {
        findSumOfPilotingScoreAndshootingScore(response).then(response1 => console.log(response1))
    })






    a={
        id:1,
        name:"tt"
    }
    b={

        age:15
    }

        a.name.bind(b)
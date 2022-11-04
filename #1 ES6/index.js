

const users = [{
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
},
{
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 23
},
{
    id: 4,
    name: "demon slayer",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 21
}
];


const newUser = {
    id: 1,
    name: "John doe",
    username: "mrjohn",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
}

/*
Q1.Write a function to add a new record at the end of array users using spread operator,
    functions: addLast(users, temp)

*/

function addLast(users,temp)
{
    return [...users,temp];
}

console.log(addLast(users,newUser));


/*
Q2.Write a function to add a new record at the begining of array users using spread operator,
    functions: addFirst(users, temp)
*/
function addFirst(users,temp)
{
    return [temp,...users];
}

console.log(addFirst(users,newUser));




/*
Q3. Write a  function to display all records only 3 fields id,name,username.
functions : display(users)
HINT : map
*/

   
   
function display(users){

        
    const my_data=users.map(user =>{
        return {id:user.id,name:user.name,username:user.username};
    })
        
   
 //   return users.map(({ id, name, username })=>{id,name,username});
    
    
    
    console.log(my_data);
}
display(users);
    /*
    [{
        id, name, username
    }, {

    }]
    
    */


// Q4. Write a  function which will display all records  with name ==='demon'  
// function Name ---> findNameEquals(users) 
// HINT : Use filter.

function findNameEquals(users){

    const names1=users.filter(user => (user.name === "demon"))
    console.log(names1);
}
findNameEquals(users);




// Q5. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.  
// function Name ---> findSpecificStartChar(users,'B')  
// HINT : Use filter and string functions.

        function findSpecificStartChar(users,mychar){

            
       const My_data=users.filter(user => user.name.startsWith(mychar))  
       console.log(My_data);

        }
        findSpecificStartChar(users,'J')



// Q6. Write a  function which will display sum of all ages.  
// function Name ---> findSumAges(users) . 
// HINT : Use reduce functions.

        function findSumAges(users)
        {


            
            const sum_ages=users.reduce((total,user)=> total + parseInt(user.age),0)
            console.log(sum_ages)

        }
        findSumAges(users);




// Q7. Write a  function which will display all the records with only name & ages.
// function Name ---> findAll(users) 
// HINT : Use map.

        function findAll(user){

          const my_data=users.map(user =>{
            return {name:user.name,ages:user.age}
          })

          console.log(my_data)
        }
       findAll(users)







// Q8. Write a function to display sum of all ages of records having name starting with 'J'


function findages(users,mychar){

            
   
    const totalAgeOfusersStartsWithj = users
                                        .filter(user => user.name.startsWith(mychar))
                                        .reduce((sum, u) => {
                                            sum += u.age;
                                            return sum;
                                        }, 0);


    console.log("find age")
    console.log(totalAgeOfusersStartsWithj);

}
findages(users,'J')






// Q9. Write a function which will display all the records in sorting according to names.
// function Name ---> Sorting(data,'ASC')   
// ASC -> ASCENDING/ DESC -> DESCENDING

function Sorting(users,type)
{   
  var result;

    if(type=="ASC"){
    result=users.sort((a,b) => {
      let val = a.name.localeCompare(b.name);
      return val;

      });}
      if(type=="DESC"){
        result=users.sort((a,b) => {
          let val = b.name.localeCompare(a.name);
          return val;
    
          });
      }

    

 console.log(result)


}
Sorting(users,"DESC")

// Q10 Delete an object with specific array index.
// HINT : splice 
// function : deleteRecord(users,1) // 1 means delete object with index 1 in array.

   function deleteRecord(users,index1){

        const result=users.splice(index1,1)
        console.log("Removed things")
        console.log(result)
    }
    deleteRecord(users,0)








// Q11. Insert an object at specific array index.
// HINT : splice
// function : InsertRecord(users,temp,1) // 1 means inset object at index 1 in array.

              function InsertRecord(users,temp,index2){

                        
                        users.splice(index2,0,temp)
                        const result1= users;
                        console.log("My data")
                        console.log(result1)
                }
                InsertRecord(users,newUser,3)


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
},
{
    id: 5,
    name: "ABcdef slayer",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 21
},
{
    id: 6,
    name: "Abcdef slayer",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 21
}
,
{
    id: 7,
    name: "John",
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
 Q9. Write a function which will display all the records in sorting according to names.*/

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

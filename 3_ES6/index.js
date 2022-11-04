const persons = [{
    name: "Joe",

    animals: [{
            species: "dog",
            name: "Bolt",
            age: 23

        },
        {
            species: "cat",
            name: "Billy",
            age: 24
        },

    ]
},
{
    name: "Bob",
    animals: [{
        species: "dog",
        name: "Snoopy",
        age: 20
    },
    {
        species: "dog",
        name: "cappy",
        age: 10
    },
    {
        species: "turtle",
        name: "Hii",
        age: 15
    }
   ]
},

{
    name: "Slobby",
    animals: [{
            species: "cat",
            name: "Snoopy",
            age: 15
        },
        {
            species: "turtle",
            name: "cappy",
            age: 15
        },
        {
            species: "dog",
            name: "cappy",
            age: 10
        }

    ]
}
];



// Q1.Display only person names.


    function fetchPersonNames(persons){
        return  personNames = persons.map(person => person.name)
    }


    // Q2.Display only person animals list.

    function fetchAnimalsListInPerson(persons){

        let animalsList = persons.reduce((animalsData,person) => {

            animalsData.push(...person.animals)
            return animalsData;
        },[]);

      return animalsList;

    }

    // Q3.Display the total count of animals in person array.

        function totalCountOfAnimalsInPersonArray(persons){
            let personNamesAndAnimalsCount = persons.reduce((total,person) => (total + person.animals.length),0)
         return personNamesAndAnimalsCount;
        } 

    // Q4.Display all names of owner who has species as dog

        function allNamesOfOwnerHasSpeciesAsDog(persons,animalType){

                let ownerNames = persons.filter(person => {
                    let animalWithAnimalType = person.animals.find(animal => animal.species === animalType)
                    return Boolean(animalWithAnimalType);
                }).map(person => person.name)

            return ownerNames;

        }

    // Q5 Display all names of owner who has species as dog and turtle

    /*Explanation for below code we need to filter names of owners who having Dogs and Turtle and then from person.animals.species we cant get 
      the data  so person.animals we can get the animals list then we need to check every object in the animals array of object to check every element
      we can use forEach loop to read each element in every person animals list so includes will fin the if required species is availble or not
      then set.add function add the element of each person so set will not allow the duplicate values so we get only dog and turtle ,So now
      set having some elements if we find the size of set if we get size 2 then we are searching for 2 species so we get the entire object 
      from that result we get person names by using map function */

        function fetchOwnersHasSpeciesAsDogAndTurtle(persons){
            
            return ownerNames = persons.filter(person =>{
                 let set = new Set();
                 person.animals.forEach(animal => ["dog","turtle"].includes(animal.species) && set.add(animal.species));
                    return set.size ===2;
            }).map(person => person.name)
                
        }

    // Q6 Does all owner has dog as species Justify.
    
         function fetchAllOwnerHasDog(persons,animal_type){

                let ownerNamesWithDog = persons.filter(person => {
                    let DogAvailable = person.animals.find(animal => animal.species === animal_type)
                    
                        return DogAvailable;
                }).map(person => person.name)

                let ownerNamesCount = persons.map(person => person.name)
                
            return ownerNamesWithDog.length === ownerNamesCount.length ? true : false

         }

    // Q7 Does some owner has turtle please specify name of turtle.

         function someOwnerHasTurtleDisplayNameOfTurtle(animalsList,animalType)
         {     
              return animalsList.filter(animal => { if(animal.species === animalType) return animal.name;}).map(animal => animal.name)  
         }

    // Q8 Display name of Owner along with his total count of animals.

         function nameOfOwnerAlongWithHisTotalCountOfAnimals(persons){

            return ownerNamesAndCount = persons.map(person =>person = {name:person.name,Count:person.animals.length})

         }

    
    // Q9 Display list of all animals.

         function displayingAllAnimals(animals){
            return animals;
         }

    // Q10 Display list of only dogs

         let listOfAnimalsWithSameType = (animalsList,animalType) => {
                return animalsList.filter(animal => animal.species === animalType)
         }

    // Q11 Display the count of all dogs in Array persons

         let countOfAnimalType = (animalsList,animalType) => {
                let animalsType= animalsList.filter(animal => animal.species === animalType);
                return animalsType.length;
         }

    // Q12 Display names of owner who has all species such as dog cat and turtle.


         let ownersName = (persons) => {
                return ownerNames = persons.filter(person =>{
                            let set = new Set();
                            person.animals.forEach(animal => ["dog","turtle","cat"].includes(animal.species) && set.add(animal.species));
                            return set.size ===3;
                        }).map(person => person.name)
        }

    
    // Q13 Display the record for species as dog and name as 'Snoopy'

        let fetchingAnimalDogNameAsSnoopy = (animalsList,animalType,animalName)=>{

               return animalsList.filter(animal => (animal.species === animalType && animal.name === animalName))

        }


    
    // Q14 Sort all records based on name of owner in ascending and descending

        let sortingOfOwnerNames = (persons,sortingType) => {

                return personsDataAfterSorting= persons.sort((a,b) => {
                  return AfterSortingData = sortingType === "ASC" ?   a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                })
        }

    
    
    // Q15 Display list of all dogs whose name starts with 'S'

        let dogsNameStarWithS = (animalList,animalType,animalStratsWith) =>{

                return animals = animalList.filter(animals => {
                   if(animalType.includes(animals.species) && animals.name.startsWith(animalStratsWith)) return animals
                })

        }


    
    // Q16 Display list average ages of animal species.



        let avgAgesOfAnimals =(animalList) => {

            const animalGroups = {};

                animalList.forEach((animal) => {
                      const species = animal.species;
                       if(!animalGroups[species]) {
                           animalGroups[species] = [];
                        }
                  animalGroups[animal.species].push(animal);
                });
         
                const result = {};
                Object.keys(animalGroups).forEach(species => {
                     const animals = animalGroups[species];
                     const sum = animals.reduce((prev,data) => prev + data.age,0);
                   result[species] = Math.round( sum/animals.length);
                })
            return result;
        }

        
    // Q17 Display average age of dogs.

        let avgAgeOfDogs =(animalsList) => {

            let avgAge = animalsList.reduce((prev,animal) => (prev + animal.age),0)
            return Math.round(avgAge/animalsList.length);
        }

    // Q18 Display sum of all ages of animals.

        let sumOfAllAgesOfAnimals = (animals => {

                return animals.reduce((prev , animal)=>(prev + animal.age),0)
        })

    // Q19 Display sum of all ages of animals whose species is turtle.

        let sumOfAnyTypeOfAnimalSumAges = (animals,animalType) =>{
                return animals.filter(animal => animal.species === animalType).reduce((prev,animal)=> (prev + animal.age),0)
        }
 

    
    // Q20 Find list of animals and then sort on animal names.

        let sortingAnimalsList = (animalsList,typeOfSort) => {
            return AfterSorting = animalsList.sort((a,b) => {
                return AfterSortingData = typeOfSort === "ASC" ?   a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            })
        }










  
    console.log(listOfAnimalsWithSameType(fetchAnimalsListInPerson(persons),"dog"))
//console.log(avgAgeOfDogs(listOfAnimalsWithSameType(fetchAnimalsListInPerson(persons),"dog")))

      //  console.log(avgAgeOfDogs(fetchAnimalsListInPerson(persons),"dog"));
        //Q16 not undestood
      //  console.log(sortingOfOwnerNames(persons,"DESC"))
  // console.log(dogsNameStarWithS(fetchAnimalsListInPerson(persons),"dog","S"))
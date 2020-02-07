const animalsForAdoption = [
    {
        species: "dog",
        age: 13
    },
    {
        species: "cat",
        age: 3
    },
    {
        species: "dog",
        age: 13
    },
    {
        species: "cat",
        age: 3
    }
    ];

animalsForAdoption.forEach(sayHi);

function sayHi(adoptMe){
    console.log(`Hi there, meet ${adoptMe.species}, he's ${adoptMe.age} years old`);
}

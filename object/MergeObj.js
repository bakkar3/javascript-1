 // Merge objects
 const person1 = { firstName: "John" };
const person2 = { lastName: "Thompson" };
const person3 = { middleName: "Middle" };
Object.assign(person1, person2, person3);
console.log(person1, person2, person3);

// oder

const finalObject = { ...person1, ...person2, ...person3 };
console.log(finalObject);
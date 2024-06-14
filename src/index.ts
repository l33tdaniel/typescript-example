// index.ts

// Define an interface
interface Person {
    name: string;
    age: number;
}

// Create a function that greets a person
function greet(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// Create a person object
const user: Person = {
    name: "Alice",
    age: 30
};

// Call the function and log the result
console.log(greet(user));

// PRIMITIVES: NUMBER, STRING, BOOLEAN
// MORE COMPLEX TYPES: ARRAYS, OBJECTS
// FUNCTION TYPES, PARAMETERS

// PRIMITIVES

let age: number;
age = 12;

let userName: string;
userName = 'Luke';

let isInstructor = true;

// more complex types

let hobbies: string[];

hobbies = ['Sport', 'Cooking'];

type Person = {
	name: string;
	age: number;
};

let person: Person;

person = {
	name: 'Luke',
	age: 16,
};

// person = {
// 	isEmployee: true,
// };

let people: Person[];

// Type inference

let course: string | number = 'React - Guide';

course = 123;
// FUNCTIONS & TYPES

function add(a: number, b: number) {
	return a + b;
}

function print(value: any) {
	console.log(value);
}
//GENERICS

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}
const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

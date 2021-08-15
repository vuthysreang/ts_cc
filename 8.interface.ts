/* Interface */

///////////////  Interface we use only for declare types of our object ////////////////

// For example it bad way to declare object
const obj: {
  username: string;
  email: string;
  phone: string;
  age: number;
  isActive: boolean;
} = {
  username: "Vuthy",
  email: "vuthy@gmail.com",
  phone: "098820725",
  age: 21,
  isActive: true,
}; // this is so bad way to work with object

// So we will use interface for good work with object in typescript
interface Person {
  username: string;
  email: string;
  phone: string;
  age: number;
  isActive: boolean;
}

const obj1: Person = {
  username: "Vuthy",
  email: "vuthy@gmail.com",
  phone: "098820725",
  age: 21,
  isActive: true,
};

/////////////////

/* Type */
////////////// type we can use with object and also other type //////////////////
type PersonTypes = {
  username: string;
  email: string;
  phone: string;
  age: number;
  isActive: boolean;
}[];
const obj2: PersonTypes = [
  {
    username: "Vuthy",
    email: "vuthy@gmail.com",
    phone: "098820725",
    age: 21,
    isActive: true,
  },
]; // Array of Object

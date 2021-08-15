let profileObject = {
  firstName: "Vuthy",
  lastName: "Zevo",
  phoneNumber: "098820725",
  age: 23,
  isSmart: true,
};
console.log(profileObject);

// We can declare like this
let profileObject1: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: number;
  isSmart: boolean;
};
profileObject1.firstName = "Vuthy";

// We can declare like this
let profileObject2: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: number;
  isSmart: boolean;
} = {
  firstName: "Vuthy",
  lastName: "Zevo",
  phoneNumber: "098820725",
  age: 22,
  isSmart: true,
};

profileObject2.firstName.length;
profileObject2.age.length; // length doesn't use in type number -> show error

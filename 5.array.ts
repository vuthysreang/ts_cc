/* ==================== Array of Strings =================== */
const arrayOfString = ["String1", "string2", "string3"];
arrayOfString.push("String4");
arrayOfString.push(12); // we can only push string value
arrayOfString.push(true); // we can only push string value
console.log(arrayOfString);

// we can also declare like this
const arrayOfString1: string[] = [];
const arrayOfString2: string[] = ["String1", "string2", "12244"];

/* ==================== Array of Booleans =================== */
const arrayOfBoolean: boolean[] = [true, false, true, false];
arrayOfBoolean.push(true);
arrayOfBoolean.push("string"); // We can only push with boolean value
arrayOfBoolean.push(123); // We can only push with boolean value

/* ==================== Array of Numbers =================== */
const arrayOfNumber = [1, 2, 3, 5];
arrayOfNumber.push(24);
arrayOfNumber.push("String"); // we can only push with number value
arrayOfNumber.push(true); // we can only push with number value

/* ==================== Array of any type =================== */
const array = [];
const array1: any[] = [];

array.push(1);
array.push("String1");
array.push(true);

array1.push(1);
array1.push("String1");
array1.push(true);

/* ==================== Array of specific define multiple types =================== */
const arrayOfStringNumber: (string | number)[] = [2, "string2"];
const arrayOfStringNumber1: (string | number)[] = [2, "string2", true]; // we can only have string or number value
arrayOfStringNumber.push(2);
arrayOfStringNumber.push("Vuthy");
arrayOfStringNumber.push(true); // we can only push with string or number value

const arrayOfStringNumberBoolean: (string | number | boolean)[] = [
  2,
  "Buthy",
  true,
];
arrayOfStringNumberBoolean.push(1);
arrayOfStringNumberBoolean.push("Love");
arrayOfStringNumberBoolean.push(true);

/* ==================== Array of Objects =================== */
const arrayOfObject: {}[] = [1];
arrayOfObject.push({
  username: "Vuthy",
  age: 23,
  isSmart: true,
});

// we can do like this
const arrayOfObject1: {
  username: string;
  age: number;
  isSmart: boolean;
}[] = [];
arrayOfObject1.push({
  username: "Vuthy",
  age: 23,
  isSmart: true,
});

/* ==================== Array of Arrays =================== */
const arrayOfArray = [
  ["Love", "You", 1, true],
  ["Vuthy"],
  [],
  [1, 2, 3],
  [true, false],
]; // array of any types

const arrayOfArray0 = [
  ["Love", "You", 1],
  ["Vuthy"],
  [],
  [1, 2, 3],
  [true, false],
]; // array of any types

const arrayOfArray01 = [
  ["Love", "You", 1],
  ["Vuthy", true],
  [],
  [1, 2, , true],
  [true, false],
]; // array of any types

const arrayOfArray1 = [["Love", "You"], ["Vuthy"]]; // array of arrayString

const arrayOfArray2 = [
  [1, 3],
  [12, 3],
];

// we can declare with the specific type
const arrayOfArray3: string[][][][] = [[[["String"]]], [[["String1"]]]];

//////////////////// MUCH MORE TO KNOW ABOUT ARRAY //////////////////////
// NOTE: Array is many different types and many styles to declare //

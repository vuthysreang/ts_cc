/* ============================ TYPE NUMBER ===================================== */
// Not define type
let age = 22; // It will go to type: number because of value 22

age = 23; // No error because it a number value
age = "24"; // Show error because it a string value, not a number value
age = true; // Show error because it a boolean value, not a number value

// We can define the specific type like this
let weight: number = 22; // with number value
let height: number; // not yet with number value

weight = 23; // No error because it a number value
weight = "24"; // Show error because it a string value, not a number value
weight = true; // Show error because it a boolean value, not a number value

height = 23; // No error because it a number value
height = "24"; // Show error because it a string value, not a number value
height = true; // Show error because it a boolean value, not a number value

/* ============================ TYPE STRING ===================================== */
// Not define type
let username = "Vuthy Zevo";
let bio: string = "Hello TypeScript";
let email: string;

// We can not change value with different type string (Can change only with TYPE STRING)

/* ============================ TYPE BOOLEAN ===================================== */
let isActive = true;
let isVerified: boolean = false;
let isAdmin: boolean;

// We can not change value with different type boolean (Can change only with TYPE BOOLEAN)

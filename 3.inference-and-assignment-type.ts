/* ==================== Not Specific type ====================== */
let amount; // It will show us about type of amount like this (amount: any)
amount = 2;
amount = "Vuthy";
amount = true;
amount = [];
amount = {};

/* ==================== Define Specific type ====================== */
let productName: any;
productName = "Computer";
productName = 1;
productName = true;
productName = [];
productName = {};

let phoneNumber: string | number;
phoneNumber = 098820725;
phoneNumber = "098820725";
// We can not use with this type
phoneNumber = true;
phoneNumber = [];
phoneNumber = {};

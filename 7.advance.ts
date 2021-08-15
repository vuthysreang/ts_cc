/* UNION TYPE */
let numberOrString: number | string = "Vuthy";
numberOrString = 5;
numberOrString = true; // it will error because we can only use number or string in this variable

// for array
let arr: (number | string | {})[] = ["Vuthy", 22, { a: 1, b: "Vuthy" }];

/////////////

/* ENUM */
enum colorTypes {
  RED,
  GREEN,
  BLUE,
  PURPLE,
  WHITE,
  BLACK,
  YELLOW,
  PINK,
  ORANGE,
}
let myColor: colorTypes = colorTypes.GREEN;

/////////////

/* OBJECT */
let obj: {
  text: string;
  text2?: string; // it optional after we declare here then we will use it or not, it's ok
} = {
  text: "vuthy",
};

//variables
let sales = 123_456_789;
let coursse = "Typescript";
let is_published = true;

function render(document: any) {
  console.log(document);
}

//arrays
let numbers: number[] = [];

numbers.forEach((n) => n.toExponential);

//tuples
let user: [number, string] = [1, "mosh"];

//enums

//pascal naming
enum Size {
  Small,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

//Functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

//Objects

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: {} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union types

function kgToLbs(weight: number | string) {
  //Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10");

//intersection types

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal types to set exact or specific value

type Quantity = 50 | 100;

let quantity: Quantity = 100;

type metric = "cm" | "inch";

//nullable types
function greet(name: string | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(undefined);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// optional property access operator
console.log(customer?.birthday?.getUTCFullYear());

let log: any = null;
log?.("a");

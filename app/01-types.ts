let username: string = "instructor";
let password: string = "letmein1234!";
let instructorId: number = 5;
//we declare a variable, we declare the variables type and we initialize with a value of that type. 

//we can also declare a value and type without initialization:
let passord: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

//we can have implicit typing, where we don't have to declare a type:
let greeting = "Hello";

//TS offers compile-time error checking. Compile-time checking occurs during the compile time. Compile time errors are caused by a typing mistake or poor syntax.
let password: string;
password = 1234;

//Numbers: one of the most common primitive types. 
let age: number = 40;
let currentYear: number = 2020

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//String: one of the most common primitive types. 
let compnayName: string;
companyName = "Eleven Fifty"

let appName: string = 'Twitter';
appName = "Instagram";

//Boolean
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//Array:
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
let allSources: Array<number> = [100, 92, 95, 96];
//although both have the same effect, option 1 is much more prevalent. 

//accessing the array indices works in the same way: 
console.log("Student List:", studentList[0]);

//Any: this can be used if the type is not known during development. At any point in the application, we may not know what type a variable is. 
let dataFromThridParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThridParty);

dataFromThridParty = 12345;
console.log(dataFromThridParty);
console.log(typeof dataFromThridParty);

//Void: a void type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value:
function sayHelloToAll() : void {
    console.log("Hello to all!")
}

//Null and Undefined: 
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//Tuple: allows you to create an array with multiple different types(notice how Tuple is sort of a suffix of multiple)
//declare a tuple type:
let usernameAndId: [number, string];
//initialize it
usernameAndId = [1, "kennisreally40"]; // OK

//these values must be entered in proper order. 
usernameAndId = ["kenn26", 2];

//Enum: allows us to give names in numeric values
enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword

//like arrays, enums start at 0, but that starting index can be assigned a different number:
enum CardType { Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType);

//Overview Code: 
let x: number | string;
let y: number | null;

x = '1234';
x = 1234;

x = true;
y = false;







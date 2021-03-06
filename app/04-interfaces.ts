interface Animal {
    name: string;
    numberOfLegs: number;
}

//No INstantiation: 
let a: Animal = new Animal();

//Implementing an interface: 
interface Animal {
    name: string;
    numberOfLegs: number;
}

let lassie: Animal = {

}

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}

//Methods: 
//1
function sayHello(name: string) : string {
    //2
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

                //1
class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    //2
    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d);
    }
}

//3
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));

/* 
1. Notice that we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. Which means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
2. We implement the setTimeOfPurchase method in the class, and provide a basic implementation of by logging the date to the console
3. We then create a new instance of the Apples class and call the setTimeOfPurchase method. 
*/
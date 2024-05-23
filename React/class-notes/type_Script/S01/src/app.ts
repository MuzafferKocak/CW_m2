/* console.log('Hello World')

let x = 5 // X'in değeri 5

// Merhaba TS

const y = 'Hello'
const z = (a,b,c)=> a+b */

//! Type Annotation

/* let a : number = 5

a = 'Hello'

a = false

let b : string = 'Selam'

b = 2

let c = false

c = true

c = 5

c = 'str'

console.log(c) */

//! Arrays

/* let num : number[] = [1,2,3]
let num2 : Array<string> = ['a', 'b', 'c'] // Generic Array tanımlama

num.push(4)
num.push('4')

let bosArray: string[] = [] // Boş array tanımlama */

//! Tuples

/* let myTuple : [number, boolean, string]

myTuple = [1,true,'admin']

myTuple = [3.14, false, 'circle']

myTuple.push(2) //No error


let myTuple2 : [number, string]

myTuple2 = [0 , 'user']


myTuple2.push(1)
myTuple2.push('admin')
myTuple2.push(false) //Hata alırız boolean tanımlı değil
 */
//? Tuples Arrays

/* let myTuple3: [number,string][]

myTuple3 = [[1, 'john'],[2, 'Smith']]

myTuple3.push(['jane',4]) // hata
myTuple3.push([4,'jane']) // ok
myTuple3.push(false) //hata */

//! Enum

const enum Color {
  Red,
  Green,
  Blue,
}

/* Const koymadan js tarafi 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Blue;
console.log(selectedColor);*/

// let selectedColor: Color = Color.Blue;

// console.log(selectedColor);

// enum Tshirt {
//     Small = "S",
//     Medium = "M",
//     Large = "L"
// }

// let userSize : Tshirt = Tshirt.Small

// console.log(userSize);

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = Success + 2,
//     BadRequest = NotFound -4,
//     ServerErrors

// }

// console.log(StatusCodes.ServerErrors);

// //! Any Type

// let d : any = 4
// d= "merheba"
// d = false

// let anyArray: any [] = [1, "selam"]

// anyArray.push(true)

// let e : boolean = d

//! UNknown

// let notSure: unknown = 4
// notSure = "selam"

// console.log((notSure as string).length);  //*allias yöntemi
// console.log((<string>notSure).length);  //* generic yöntem

//! Void return icermeyen fonksiyonlarin dönüs tipi

// let f : number = 100

// function increase () : void{
//     console.log(f);
//     f++
// }

// increase()

//! Never hic bir zaman geri dönüsü olmayacak durumlar icin

// function endlessLoop (): never {
//     while(true){
//         console.log("Hello");
//     }
// }

//! Union Type

// let g : string | number = 100

// g= "Merhaba"

// g = true //* Compiler

//? Type narrowing

// function checkNumber(n: string | number): void {
//   if (typeof n == "number") {
//     console.log(n ** 2);
//   } else {
//     console.log(n.length);
//   }
// }

// checkNumber(2);
// checkNumber("TypeScript");

//! Type Aliases

// type YeniBirType = number | string

// let h: YeniBirType = 3

// h = "selam"

// h= false //* Error

// let k: YeniBirType =  "merhaba"

//? Objects

// const car: {
//   make: string,
//   model: string,
//   year: number
//   readonly lastKM: number
//   features:string[]
// }={
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   lastKM:10000,
//   features: ["sunroof", "A/C" ]

// }

// car.make = "Audi"
// car.make = false //*Error

// car.age = 4 //*Error ekleme yapilmiyor
// car.year = 2021
// car.lastKM =11000

// type Car2 = {
//   make: string,
//   model: string,
//   year: number
//   readonly lastKM: number

// }

// const yeniArac: Car2 = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   lastKM:10000,

// }

//! String Literals

// type Car3 = "Fiat" | "BMW" | "Mercedes" | 2000

// let Car4: Car3 = "Fiat"
// let Car5: Car3 = "BMW"
// let Car6: Car3 = "Audi" //* Error
// let Car7: Car3 = 2000

//! Intersection

// type Book = {
//   book_id: number;
//   book_name: string;
// };

// type Author = {
//   readonly author_id: number;
//   Author_name: string;
// };

// type Product = Book & Author;

// const book1: Product = {
//   book_id: 1234,
//   Author_name: "Tolkien",
//   book_name: "Silmarillion",
//   author_id: 1892,
// };

// book1.book_id = 1235;
// book1.author_id = 1893;  //* Error

//! Functions

// function selamla (mesaj: string, isim:string):string{
//   return `${mesaj + "" + isim}`
// }
// console.log(selamla("Günaydin", "Ahmet"));

// selamla("Ahmet") //* Error
// selamla("mehaba", "Ahmet", "nasilsin") //*Error

// selamla(123, "Ahmet")

//? Arrow functions
// let multiply = (x: number, y: number): number => {
//   return x * y;
// };

//? Optional parameters

// function selamla2(mesaj: string, isim?: string): string {
//   return `${mesaj + "" + isim}`;
// }

// console.log(selamla2("Günaydin", "Ahmet"));
// console.log(selamla2("Günaydin"));

//? Overloading

// function greet (name:string):string;
// function greet (name:string, age:number):string
// function greet (name: string, age?:number):string{
//     if (age !== undefined) {
//         return `Hello my name is ${name} and I am ${age} years old.`;
//     }else{
//         return `Hello my name is ${name}.`
//     }
// }

// console.log(greet('Mark'))
// console.log(greet('Mark', 40))
// console.log(greet('Mark', 40 )) //* Error


//? rest parameters

// function selamla4 (mesaj:string, ...isimler:string[]):string{
//   return `${mesaj + " " + isimler.join(", ")+"!"}`
// }
// console.log(selamla4("Merhaba"));
// console.log(selamla4("Merhaba", "Mark"));
// console.log(selamla4("Merhaba", "Mark", "Anthony"));


// function topla(num1:number, ...numbers:number[]){

//   let total = num1;
//   numbers.forEach(num => total += num)
//   console.log(total)
// }

// topla(5,'Merhaba') //* Error
// topla(5)
// topla(5,6)
// topla(1,2,3,4,5,6,7,8,9,10)
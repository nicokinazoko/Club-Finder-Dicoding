// const foods         =   ["Pie", "Cake", "Honey"];

// //definisikan dengan cara biasa
// const myFood        =   foods[0];
// const yourFood      =   foods[1];
// const ourFood       =   foods[2];

// console.log(myFood,yourFood,ourFood);


//membuat destructuring array menggunakan []
//jika destructuring object menggunakan {}

// const favorites                                             =   ["Seafood","Salad", "Nugget", "Soup"];

// const [firstFood, secondFood, thirdFood, fourthFood]        =   favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

//bisa juga assign data dengan menggunakan indeks tertentu
//jika mengakses indeks 1, maka indeks yang sebelumnya bisa menggunakan koma (,) 
//contoh

// const [ , , thirdFood]                                      =   favorites;

// console.log(thirdFood);


//destructuring assignment 
//bedanya dengan destructuring object yaitu tidak perlu tanda kurung
//contohnya

// let myFood                                                  =   "Ice Cream";
// let herFood                                                 =   "Noodles";

// [myFood,herFood]                                            =   favorites;

// console.log(myFood);
// console.log(herFood);

//array destructuring bisa digunakan sebagai menukar dua nilai dalam variabel
//sama halnya jika menggunakan temp
//contoh

//ini pertukaran tanpa menggunakan destructuring array
// var a                                                           =   1;
// var b                                                           =   2;
// var temp;

// console.log("Sebelum Swap ");
// console.log("a = " + a);
// console.log("b = " + b);

// temp                                                            =   a;
// a                                                               =   b;
// b                                                               =   temp;

// console.log("Setelah Swap");
// console.log("a = " + a);
// console.log("b = " + b);


//cara destructuring 
// let a                                                           =   1;
// let b                                                           =   2;

// console.log("Sebelum Swap ");
// console.log("a = " + a);
// console.log("b = " + b);

// [a,b]                                                           =   [b,a];

// console.log("Setelah Swap");
// console.log("a = " + a);
// console.log("b = " + b);


//default values di destructuring array
//jika dia tidak ada di array maka akan keluar output undefined
//contoh

const favorites                                                     =   ["Seafood"];

const [myFood, herFood = "Salad"]                                   =   favorites;

console.log(myFood);
console.log(herFood);
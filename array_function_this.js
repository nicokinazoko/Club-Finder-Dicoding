//penggunaan fungsi this

//jika fungsi dipanggil dengan new, maka nilanya akan menjadi objek
//contoh

// function People(name, age, hobby)
// {
//     this.name           =   name;
//     this.age            =   age;
//     this.hobby          =   hobby;
// }

// const programmer        =   new People("John", 18, ["Coding", "Read Book", "Ping Pong"]);

// console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.hobby);

//penggunaan new sama saja dengan penggunaan {} dalam membuat objek
//contoh

// const programmer        =   {
//                                 name        :   "John",
//                                 age         :   18,
//                                 hobby       :   ["Coding", "Read Book", "Ping Pong"]
//                             }

// console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.hobby);                         


//contoh perbedaan dengan arrow dan tanpa arrow

// function People(name, age, hobby)
// {
//     this.name                       =   name;
//     this.hobby                      =   hobby;
//     this.age                        =   age
// }

// People.prototype.introMyself        =   function()
//                                         {
//                                             //bedanya di sini
//                                             //setTimeout(function ()
//                                             setTimeout(() =>
//                                             {
//                                                 console.log(`Hello, Nama Saya ${this.name},
//                                                 umur saya ${this.age}`);
//                                                 console.log(`Hobby saya adalah ${this.hobby}`);
//                                             },300)
//                                         }     

// const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
// programmer.introMyself();                                   


//penggunaan default value di function

//contoh regular function

// function sayHello(name = "Stranger" , greet = "Hello")
// {
//     console.log(`${greet} ${name}`);
// }

// sayHello("Nico", "Hai");
// sayHello();

//contoh arrow function

const sayHello                      =   (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}`);

sayHello("Nico", "Halo");
sayHello();

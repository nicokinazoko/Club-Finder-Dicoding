//definisikan objek

const profile           =   
{
    firstName   :   "John",
    lastName    :   "Doe",
    age         :   18
}

// const firstName         =   profile.firstName;
// const lastName          =   profile.lastName;
// const age               =   profile.age;  

// console.log(firstName,lastName,age);

//definisi dengan cara destructuring pertama

//menggunakan {} sebagai deklarasi objek yang akan didestruksikan
// const {firstName,lastName,age}      =   profile;

// console.log(firstName,lastName,age);

//menggunakan inisialisasi nilai baru melalui object destruction
let firstName               =   "Nico";
let age                     =   21;

({firstName, age}                   =   profile);

console.log(firstName);
console.log(age);

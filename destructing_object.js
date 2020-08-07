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
// //namanya Destructuring Assignment
// let firstName               =   "Nico";
// let age                     =   21;

// ({firstName, age}                   =   profile);

//contoh lain untuk default values
// const {firstName,lastName,isMale}       =   profile;

// console.log(firstName);
// // console.log(age);
// console.log(lastName);
// console.log(isMale);

//isMale tidak ada karena tidak ada nilai yang diassign di situ

//agar bisa muncul maka caranya dengan menambahkan value di setelah nama variabel

const {firstName,lastName,isMale = false}   =   profile;

console.log(firstName);
console.log(lastName);
console.log(isMale);

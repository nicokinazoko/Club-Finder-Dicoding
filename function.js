//ini penulisan fungsi dengan cara biasa

// const upperizedNames            =   ["Dimas", "Windy", "Buchori"].
//                                     map(function(name)
//                                     {
//                                         return name.toUpperCase();
//                                     });

// console.log(...upperizedNames);         

//ini penulisan fungsi dengan arrow (=>)

// const upperizedNames                =   ["Dimas","Windy", "Buchori"].
//                                         map(name => name.toUpperCase());

// console.log(...upperizedNames);

//perbedaan antara fungsi biasa dan fungsi arrow

//contoh lain fungsi biasa

//deklarasi fungsi
// function sayHello(greet)
// {
//     console.log(`${greet}!`);
// }

// //function expression
// const sayName                           =   function (name)
//                                             {
//                                                 console.log(`Nama Saya ${name}`);
//                                             }

//contoh lain fungsi arrow
//function expression
// const sayHello                          =   greet => console.log(`${greet}!`);
// const sayName                           =   name => console.log(`Nama Saya ${name}`);


//jika disimpan di variabel
// const sayName                           =   name => console.log(`Nama Saya ${name}`);

// //jika sebagai argument
// ["Dimas", "Widdy", "Buchori"].forEach(name => console.log(`Nama Saya ${name}`));

// //jika disimpan sebagai objek
// const user                              =   {
//                                                 introduce: name => console.log(`Nama saya ${name}`)
//                                             };



//jika ingin memasukkan dua atau lebih parameter menggunakan kurun ()
//contoh

// const sayHello                              =   (name,greet) => console.log(`${greet}, ${name}`);

// sayHello("Nico","Selamat Pagi");

//jika tanpa parameter maka digunakan kurung biasa ()
//contoh

// const sayHello                              =   () => console.log(`Selamat Pagi Semuanya`);

// sayHello(); 

//contoh penggunaan block function
//block function = fungsi yang berisi banyak logika
//contoh


const sayHello                                  =   language =>
                                                    {
                                                        if(language.toUpperCase() === "INDONESIA")
                                                        {
                                                            return "Selamat Pagi";
                                                        }

                                                        else
                                                        {
                                                            return "Good Morning";
                                                        }
                                                    }



console.log(sayHello("INDONESIA"));
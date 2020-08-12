//synchronous artinya kode selanjutnya tidak bisa dijalankan apabila kode sebelumnya belum dijalankan
//asynchronous artinya kode selanjutnya bisa dijalankan tanpa harus menunggu kode sebelumnya berjalan


//contoh asynchronous
//penggunaan timeout

// console.log("Selamat Datang!");

// setTimeout(() => 
// {
//     console.log("Terima kasih sudah mampir, silahkan datang kembali");
// }, 3000);

// console.log("Apa yang bisa dibantu?");

// di ataas seharusnya jika berjalan, maka setTimeout akan berlajan setelah console.log terakhir

//contoh penggunaan program asynchronus yang berjalan seperti synchronus

// const getCake           =   () =>
//                             {
//                                 let cake            =   null;
//                                 console.log("Sedang membuat cake, silahkan ditunggu...");
//                                 setTimeout(() => 
//                                 {
//                                     cake            =   "Cake Selesai !";
//                                 }, 3000);

//                                 return cake;
//                             };  

// const cake              =   getCake();
// console.log(cake);

//akan ada nilai null karena setTimeout tidak memberhentikan program
//cake akan tidak terdefinisi

//solusinya
//menambahkan callback
//callback akan membawa data ketika task selesai dilakukan

const getCake           =   callback =>
                            {
                                let cake            =   null;
                                console.log("Sedang membuat cake, silahkan ditunggu...");
                                setTimeout(() => 
                                {
                                    cake            =   "Cake Selesai !";
                                    callback(cake);
                                }, 3000);
                                
                                //karena menggunakan callback, maka tidak perlu ada return
                                //return cake;

                            };  
//diganti
// const cake              =   getCake();
// console.log(cake);

//menjadi

getCake(cake =>
    {
        console.log(cake);
    }
)

                            
//contoh penggunaan callback hell
//calback hell = banyaknya function yang bersarang yang saling membutuhkan

//sebelum callback hell

function makeACake(...rawIngredients)
{
    gatheringIngredients(rawIngredients, function(ingredients)
    {
        makeTheDough(ingredients, function(dough)
        {
            pourDough(dough, function(pouredDough)
            {
                bakeACake(pouredDough, function(cake)
                {
                    console.log(cake);
                })
            })
        })
    })
}  


//menjadi

function makeACake(...rawIngredients)
{
    gatheringIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log);
}
//ada 3 bentuk promise 
//pending (janji dalam proses)
//fulfilled (terpenuhi)
//rejected (gagal terpenuhi)

//membuat promise baru
// const executorFunction              =   (resolve, reject) =>
//                                         {
//                                             const isCofffeeMakerReady           =   true;
//                                             if(isCofffeeMakerReady)
//                                             {
//                                                 resolve("Kopi Berhasil Dibuat");
//                                             }
//                                             else
//                                             {
//                                                 reject("Mesin Kopi tidak bisa digunakan!");
//                                             }
//                                         }

// const makeCoffee                    =   new Promise(executorFunction);
// console.log(makeCoffee);                                        

//resolve adalah parameter pertama
//gunanya untuk mengirimkan data ketika promise berhasil dijalankan
//ketika kondisi terpenuhi, maka akan mengubah kondisi pending menjadi fulfilled

//reject merupakan parameter kedua
//gunanya untuk mengirimkan data ketika promise tidak dapat dipenuhi
//ketika kondisi ini, maka akan mengubah kondisi pending menjadi rejected


//dari kedua tadi, output masih berupa promise
//cara mengambil nilai nya yaitu dengan menggunakan .then()
//berikut contohnya

// const executorFunction              =   (resolve, reject) =>
//                                         {
//                                             const isCofffeeMakerReady           =   false;
//                                             if(isCofffeeMakerReady)
//                                             {
//                                                 resolve("Kopi Berhasil Dibuat");
//                                             }
//                                             else
//                                             {
//                                                 reject("Mesin Kopi tidak bisa digunakan!");
//                                             }
//                                         }

// const handlerSuccess                =   resolvedValue =>
//                                         {
//                                             console.log(resolvedValue);
//                                         }                                        

// //menambahkan handler rejected

// const handlerRejected               =   resolvedValue =>
//                                         {
//                                             console.log(resolvedValue);
//                                         }
// const makeCoffee                    =   new Promise(executorFunction);
// makeCoffee.then(handlerSuccess,handlerRejected);

//makeCoffee menghasilkan objek promise dari resolve executorFunction
//handlerSuccess mengambil nilai parameternya
//memanggil method .then() dari makeCoffee untuk memberi handlerSuccess sebagai parameternya dari nilai resolve

//solusi lain untuk menangkap error yaitu dengan catch

//caranya sebagai berikut
// const makeCoffee                    =   new Promise(executorFunction);
// makeCoffee
// .then(handlerSuccess)
// .catch(handlerRejected);


//cara membuat chaining promise

const state                          =   {
                                            isCoffeeMakerReady  : true,
                                            seedStocks          :   {
                                                                        arabica     :   250,
                                                                        robusta     :   60,
                                                                        liberica    :   80
                                                                    }
                                        }
  
const getSeeds                      =   (type, miligrams) => 
                                        {
                                            return new Promise((resolve, reject) => 
                                            {
                                                if(state.seedStocks[type] >= miligrams) 
                                                {
                                                    state.seedStocks[type] -= miligrams;
                                                    resolve("Biji kopi didapatkan!")
                                                } 
                                                else 
                                                {
                                                    reject("Maaf stock kopi habis!")
                                                }
                                            });
                                        }
  
const makeCoffee                    =   seeds => 
                                        {
                                            return new Promise((resolve, reject) => 
                                            {
                                                if(state.isCoffeeMakerReady) 
                                                {
                                                    resolve("Kopi berhasil dibuat!")
                                                }
                                                else 
                                                {
                                                    reject("Maaf mesin tidak dapat digunakan!");
                                                }
                                            })
                                        }
  
const servingToTable                =   coffee => 
                                        {
                                            return new Promise(resolve => 
                                                {
                                                    resolve("Pesanan kopi sudah selesai!")
                                                })
                                        }
  
// function reserveACoffee(type, miligrams) 
// {
//     getSeeds(type, miligrams)
//     .then(makeCoffee)
//     .then(servingToTable)
//     .then(resolvedValue => 
//         {
//             console.log(resolvedValue);
//         })
//     .catch(rejectedReason => 
//         {
//         console.log(rejectedReason);
//         })
// }

//menggunakan await dan async

async function reserveACoffee(type,miligrams)
{
    try
    {
        const seeds                 =   await getSeeds(type,miligrams);
        const coffee                =   await makeCoffee(seeds);
        const result                =   await servingToTable(coffee);
        console.log(result);
    }catch (rejectedReason)
    {
        console.log(rejectedReason);
    }
}
  
  /* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
  reserveACoffee("liberica", 50);
  
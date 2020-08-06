const favorites     =   ["Seafood", "Salad", "Nugget", "Soup"];

//ini yang bukan spreading operator
//console.log(favorites);

//ini yang hasil dibentangkan dalam spreading operator 
console.log(...favorites);


//sebagai nilai parameter dalam variadic functions 
//contohnya
//Math.max() sebagai mencari nilai terbesar
const numbers       =   [12,32,90,12,32];

//menghitung nilai max
console.log(Math.max(...numbers));


//menghubungkan dua buah array dalam objek baru

const others        =   ["Cake", "Pie", "Donut"];

//menggabungkan dua array dengan cara biasa yang masih dalam berbentuk objek
// const allFavorites  =   [favorites,others];

// console.log(allFavorites)

// 0: (4) ["Seafood", "Salad", "Nugget", "Soup"]
// 1: (3) ["Cake", "Pie", "Donut"]


//menggabungkan dua buah array dengan cara spreading operator
//hasilnya nanti akan menjadi satu array

const allFavorites  =   [...favorites,...others];

console.log(allFavorites);
(7) ["Seafood", "Salad", "Nugget", "Soup", "Cake", "Pie", "Donut"]

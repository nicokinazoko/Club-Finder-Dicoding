//agar function dapat menerima banyak parameter

//dengan membuat variadic function

function sum(...numbers)
{
    var result      =   0;
    for(let number of numbers)
    {
        result      +=  number;
    }
    
    return result;
}


console.log(sum(1,2,3,4,5));


//penggunaan rest parameter pada array destructuring

const refrigerator                          =   ["Samsung",50,2,"Milk","Cheese", "Egg", "Butter"];
const [manufacturer,weight,door,...items]   =   refrigerator;


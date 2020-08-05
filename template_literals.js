const user  =   
{
    firstName   :   "Nico",
    lastName    :   "Nico",
    age         :   21
}

//ini cara lama
console.log("Nama = " + user.firstName + " " + user.lastName + ", Umur = " + user.age);

//ini cara ES6
console.log(`Nama: ${user.firstName} ${user.lastName}, Umur: ${user.age}`);

const admin = 
{
    name        :   "Jane",
    position    :   "Marketing"
}

const message    =   "Dear " + user.firstName + " " + user.lastName + "\n\n" 
+ " Selamat Ulang Tahun yang ke-" + user.age + ". Semoga selalu diberikan kesehatan." + "\n\n"
+ " Best Regards, \n" + admin.name + " \n" + admin.position;

console.log(message)
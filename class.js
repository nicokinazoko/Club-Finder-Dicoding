//penggunaan class constructor

// class Car
// {
//     constructor (manufacture, color)
//     {
//         this.manufacture        =   manufacture;
//         this._color              =   color;
//         this.enginesActive      =   false;
//     }

//     //mengaplikasikan getter setter
   
//     get color()
//     {
//         return `Warna Mobil ${this._color}`;
        
//     }

//     set color(value)
//     {
//         console.log(`Warna Mobil dibuah dari ${this.color} menjadi ${value}`);
//         this._color              =   value;
//     }

//     //penulisan method
//     startEngines()
//     {
//         console.log("Mesin dinyalakan");
//         this.enginesActive      =   true;
//     }

//     info()
//     {
//         console.log(`Manufacturer : ${this.manufacture}`);
//         console.log(`Color : ${this.color}`);
//         console.log(`Engines : ${this.manufacture ? "Active" : "Inactive"}`);
//     }
// }





//pembuatan instance menggunakan new
// const johnCar                   =   new Car("Honda", "Red");
// const adamCar                   =   new Car("Tesla", "Black");


// console.log(johnCar.manufacture);
// console.log(adamCar.manufacture);

//cara mengakses property accessor
// const johnCar                   =   new Car("Honda", "Red");
// console.log(`Warna Mobil John ${johnCar.color}`);

// johnCar.color                   =   "White";
// console.log(`Warna Mobil John Baru ${johnCar.color}`);


// const johnCar                       =   new Car("Honda", "Red");
// console.log(johnCar.color);
// johnCar.color                       =   "White";
// console.log(johnCar.color);


//mengakses method
// const johnCar                       =   new Car("Honda", "Red");
// johnCar.startEngines();
// johnCar.info();


//penggunaan inheritance pada class

// class Car
// {
//     constructor (licensePlate, manufacture, wheels)
//     {
//         this.licensePlate               =   licensePlate;
//         this.manufacture                =   manufacture;
//         this.wheels                     =   wheels;
//         this.enginesActive              =   false;
//     }

//     startEngines()
//     {
//         console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan`);
//     }

//     info()
//     {
//         console.log(`Nomor Kendaraan : ${this.licensePlate}`);
//         console.log(`Manufacturer : ${this.manufacture}`);
//         console.log(`Mesin : ${this.enginesActive ? "Active" : "Inactive"}`);
//     }

//     droveOff()
//     {
//         console.log(`Kendaraan ${this.licensePlate} melaju!`);
//     }

//     openDoor()
//     {
//         console.log(`Membuka Pintu!`);
//     }

//     parking()
//     {
//         console.log(`Kendaraan ${this.licensePlate} Parkir`);
//     }
// }

class Vehicle 
{
    constructor(licensePlate, manufacture) 
    {
        this.licensePlate               =   licensePlate;
        this.manufacture                =   manufacture;
        this.engineActive               =   false;
    }
    
    startEngines() 
    {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }
    
    info() 
    {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
    }
    
    parking() 
    {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
}


class Car extends Vehicle 
{
    constructor(licensePlate, manufacture, wheels) 
    {
        super(licensePlate, manufacture);
        this.wheels         =   wheels;
    }
  
    droveOff() 
    {
      console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }
  
    openDoor() 
    {
      console.log(`Membuka pintu!`);
    }

    info()
    {
        super.info();
        console.log(`Jumlah Roda : ${this.wheels}`);
    }
}

//penggunaan static method
class VehicleFactory
{
    static repair (vehicles)
    {
        vehicles.forEach(vehicle =>
            {
                console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`);
            })
    }
}


//mengakses static method
const johnCar           =   new Car("H121S", "Honda", 4);
// const tomMotor          =   new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar          =   new Car("TA1408K", "Tesla", 4);

//membuat instance untuk memanggil fungsi repair
const vehicleFactory    =   new VehicleFactory();
// vehicleFactory.repair([johnCar, tomMotor, dimasCar]);
// vehicleFactory.repair([johnCar, dimasCar]);
VehicleFactory.repair([johnCar, dimasCar]);

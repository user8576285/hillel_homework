class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  

  class Apartment {
    constructor() {
      this.residents = [];
    }
  
    addResident(person) {
      this.residents.push(person);
    }
  }
  
  class House {
    constructor(maxApartments) {
      this.apartments = [];
      this.maxApartments = maxApartments;
    }
  
    addApartment(apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        console.log("Достигнуто максимальное количество квартир.");
      }
    }
  }

  

const person1 = new Person("Никита","мужской");
const person2 = new Person("Настя", "женский");


const apartment = new Apartment();
const apartment1 = new Apartment();


apartment1.addResident(person1);
apartment2.addResident(person2);


const house = new House(2);


house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house);

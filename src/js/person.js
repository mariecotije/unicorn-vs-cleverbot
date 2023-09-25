export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}



// const person1 = new Person('John', 'Doe');
// const person2 = new Person('Jane', 'Doe');
// console.log(person1);
// console.log(person2);
// console.log(person1.firstName);  //get property
// console.log(person1.getFullName());  //call the method
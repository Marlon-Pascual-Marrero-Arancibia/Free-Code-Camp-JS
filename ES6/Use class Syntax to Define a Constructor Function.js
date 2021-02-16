/*
Intructions

Use the class keyword and write a constructor to create the Vegetable class.
The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

Vegetable should be a class with a defined constructor method.
class keyword should be used.
Vegetable should be able to be instantiated.
carrot.name should return carrot.
*/

// Only change code below this line
class Vegetable 
{
    constructor(name)
    {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

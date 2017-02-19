/**
 * Created by DELL on 19.02.2017.
 */

function Animal() {
    this.getName = null;
}

function CreatorAnimal() {
    this.factoryMethod = null;
}

function Rabbit() {
    this.getName = function () {
        return "I am rabbit. I can jump!";
    }
}

function BigRabbit() {
    this.factoryMethod = function () {
        return new Rabbit();
    }
}

Rabbit.__proto__ = new Animal();
Rabbit.__proto__.constructor = Rabbit;

BigRabbit.__proto__ = new CreatorAnimal();
BigRabbit.__proto__.constructor = BigRabbit;

function Wolf() {
    this.getName = function () {
        return "I am wolf. I can eat rabbit";
    }
}

function GrayWolf() {
    this.factoryMethod = function () {
        return new Wolf;
    }
}

Wolf.__proto__ = new Animal();
Wolf.__proto__.constructor = Wolf;

GrayWolf.__proto__ = CreatorAnimal;
GrayWolf.__proto__.constructor = new GrayWolf();

let animals = [new BigRabbit(), new GrayWolf()];

let animalsLength = animals.length;

for (let i = 0; i < animalsLength; i++) {

    let animal = animals[i].factoryMethod();
    console.info(animal.getName());

}

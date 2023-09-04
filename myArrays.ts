// Ways to define an Array

const superHeroes: string[] = [];
const anotherSuperHeroes: Array<string> = [];

// Defining an array of object using type aliases or interfaces

type Heroes = {
    name: string;
    level: number;
}

interface HeroesInterface {
    name: string;
    level: number;
}

const heroes: Heroes[] = [];
const heroesUsingInterfaces: HeroesInterface[] = [];

const heroesAnother: Array<HeroesInterface> = [];

// Pushing the values into the array.

heroesAnother.push({ name: "Krishh", level: 10 });

// ReadonlyArray type is a type of an array which can not be changed

function readHeroes(readHeroes: ReadonlyArray<Heroes>) : Array<Heroes> {
    return [];
}


let array: string[] | number[] = [1, 2, 3];
array = ["1", "2", "3"];
// note the difference between the two
let array1: (string | number)[] = [1, 2, "3", 4];


// 2D Array

//$1
let array2D: Array<Array<number> | Array<string>> = [[1, 2, 3], ["1", "2", "3"]];

// $2
let array2D_2: Array<Array<number | string>> = [[1, "2", 3], ["1", "2"], [1, 2]];

// $3
let array_2D_3: (string[] | number[])[] = [[1, 2, 3], ["4", "5", "6"]];

// $4
let array_2D_4: (string | number)[][] = [[1, "2", 3], [4, "5", "6"]];
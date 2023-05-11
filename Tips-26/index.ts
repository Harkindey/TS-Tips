class Animal {
    isAnimal () {
        return true;
    }
}

class Dog extends Animal {
    isDog(){
        return true
    }
}

class Labrador extends Dog {
    isLabrador(){
        return true;
    }
}

const takeForWalk = (dog: Dog) => {};

takeForWalk(new Animal()) // Animal is a bigger scope (atleast based on declaration in this file)
takeForWalk(new Dog())
takeForWalk(new Labrador()) // Labrador is a narrow version of Dog so you can takeForWalk

type Name = string;
type GoodName = VeryGoodName | "fred";
type VeryGoodName = "matt";

const isGoodName = (name:GoodName) => {};

isGoodName("matt");

// Result is false bcos name is string and GoodName is "matt" | "fred",not any string
export type Result = Name extends GoodName ? true : false; 
// Result2 is true bcos Goodname are first strings before being "matt" | "fred"
export type Result2 = GoodName extends Name ? true : false; 

// Because extends assumes that the left side of it the narrow version of the right side

// ASSIGNABILITY
